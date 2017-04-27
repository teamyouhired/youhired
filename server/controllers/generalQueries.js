var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel')
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ActivityLog = require('./../models/ActivityLogModel');
var ContactApplicationJoin = require('./../models/ContactApplicationJoinModel');
var Promise = require('bluebird');

var currentStatuses = function(req){
  return connection.query("SELECT status, COUNT(status) AS total FROM jobapplications WHERE userid = :id GROUP BY status;", {
    replacements: {
      id: req.body.userid
    }
  })
};

var currentStatuses = function(req){
  return connection.query("SELECT status, COUNT(status) AS total FROM jobapplications WHERE userid = :id GROUP BY status;", {
    replacements: {
      id: req.body.userid
    }
  })
};

//Pull all status changes for a given user for the previous 24 hour period.
var statusChangesForUser = function(req) {
  return connection.query("SELECT a.activitylogcontent AS status, COUNT(a.activitylogcontent) AS total FROM ((activitylogs a INNER JOIN jobapplications j ON a.applicationid = j.id) INNER JOIN users u ON j.userid = u.id) WHERE a.createdat > (NOW() - INTERVAL '1 day') AND activitytype = 'STATUSCHANGE' AND u.id = :id GROUP BY a.activitylogcontent;", {
    replacements: {
      id: req.body.userid
    }
  })
};

//Pull all status changes for all other users for the previous 24 hour period.
var averageStatusChangesForAllUsers = function(req) {
  return connection.query("SELECT a.activitylogcontent AS status, COUNT (a.activitylogcontent) AS statusChanges, COUNT (DISTINCT u.id) AS users, COUNT (a.activitylogcontent) / COUNT (DISTINCT u.id) AS averageForOtherUsers FROM ((activitylogs a INNER JOIN jobapplications j ON a.applicationid = j.id) INNER JOIN users u ON j.userid = u.id) WHERE a.createdat > (NOW() - INTERVAL '1 day') AND activitytype = 'STATUSCHANGE' AND u.id != :id GROUP BY a.activitylogcontent;", {
    replacements: {
      id: req.body.userid
    }
  })
};

module.exports = {

  progressVersusAverage:  function(req, res){

    var statuses = {
      'INTERESTED': {user: 0, averageforothers: 0},
      'APPLIED': {user: 0, averageforothers: 0},
      'INFO INTERVIEW': {user: 0, averageforothers: 0},
      'INTERVIEW': {user: 0, averageforothers: 0},
      'OFFER': {user: 0, averageforothers: 0},
    }

    statusChangesForUser(req)
    .then((results) => {
      var data = results[0];
      if(data.length === 0){
        return;
      } else {
        for(var i = 0; i < data.length; i++){
          statuses[data[i]['status']]['user'] = data[i]['total']
        }
      }
    })
    .then(() => {
      averageStatusChangesForAllUsers(req)
      .then((results) => {
        var data = results[0];
        if(data.length === 0){
          return;
        } else {
          for(var i = 0; i < data.length; i++){
            console.log(statuses[data[i]['status']]);
            statuses[data[i]['status']]['averageforothers'] = data[i]['averageforotherusers']
          }
        }
      })
      .then(() => {
        res.send(statuses);
      })
    }).catch((err) => {
      res.status(500).send(err)
    });
  },

  getData: function (req, res) {

    var data = {
      jobapplications: []
    };

    var applications;

    var getContacts = function(){
      return Contact.findAll({
        attributes: [
        ['id', 'contactid'],
        'contactfirstname',
        'contactlastname',
        'contactcompany',
        'contactpositiontitle',
        'contactphonenumber',
        'contactemail',
        'contactaddress',
        'contactcity',
        'contactstate',
        'contactzip',
        'secondaryphonenumber',
        'secondaryemail',
        'backgroundinformation',
        [Sequelize.fn('TO_CHAR', Sequelize.col('createdat'), 'dd MON YYYY'), 'createdat']
        // [Sequelize.fn('TO_CHAR', Sequelize.col('createdat'), 'dd-mm-YYYY'), 'createdat']
        ],
        where: {
          userid: req.body.userid
        }
      });
    };

    var getApplications = function(){
      return JobApplication.findAll({
        attributes: [
          ['id', 'applicationid'],
          'positionname',
          'companyname',
          'jobposturl',
          'jobfile',
          'status',
          'companyaddress',
          'interviewdatetime',
          'offersalary',
          'offeroptions',
          'offerbenefits',
          'userid',
          [Sequelize.fn('TO_CHAR', Sequelize.col('createdat'), 'MON YYYY'), 'createdat']
        ],
        where: {
          userid: req.body.userid
        },
        order: '"applicationid" ASC'
      });
    };

    var getActivitiesForApplication = function(id){
      return ActivityLog.findAll({
        attributes: [
          ['id', 'activitylogid'],
          'applicationid',
          'activitytype',
          'activitylogcontent',
          [Sequelize.fn('TO_CHAR', Sequelize.col('createdat'), 'dd MON YYYY'), 'createdat']
        ],
        where: {
          applicationid: id,
          activitytype: 'NOTE'
        }
      });
    };

    //Pulls all contacts associated with a given job application.  Done using a join table that defines the 'many to many' relationship between contacts and users
    var getContactsForApplication = function(id){
      return connection.query("SELECT c.id AS contactid, c.contactfirstname, c.contactlastname, c.contactcompany, c.contactpositiontitle, c.contactphonenumber, c.contactemail, c.contactaddress, c.contactcity, c.contactstate, c.contactzip, c.secondaryphonenumber, c.secondaryemail, c.backgroundinformation, TO_CHAR(c.createdat, 'DD MON YYYY') AS createdat FROM ((contacts c INNER JOIN applicationcontacts j ON c.id = j.contactid) INNER JOIN jobapplications a ON j.applicationid = a.id) WHERE a.id = :id ", {
          replacements: { id: id}
        });
    };

    var loopThroughApplications = function(array, count){
      if(count === array.length){
        res.send(data);
        return;
      } else {
        var item = applications[count];
        data['jobapplications'].push({
          details: item['dataValues']
        });
        var id = item['dataValues']['applicationid'];
        getActivitiesForApplication(id)
        .then((result) => {
          data['jobapplications'][count]['activities'] = result || [];
        })
        .then(() => {
          var id = item['dataValues']['applicationid'];
          getContactsForApplication(id)
          .then((result) => {
            data['jobapplications'][count]['contacts'] = result[0] || [];
          })
          .then(() => {
            loopThroughApplications(array, count += 1)
          })
        })
      }
    };

    getContacts()
    .then((results) => {
      data['contacts'] = results;
    })
    .then(() => {
      getApplications()
      .then((results) => {
        applications = results;
      })
      .then(() => {
        loopThroughApplications(applications, 0)
      })
    })
    .catch((err) => {
      res.status(500).send(err)
    });
  },

  modifyTimeStamp: function(req, res) {
    JobApplication.findAll({
      attributes: [
      ['id', 'applicationid'],
      'positionname',
      'companyname',
      [Sequelize.fn('TO_CHAR', Sequelize.col('createdat'), 'mm-YYYY'), 'createdat']
      // 'createdat'
      ],
      where: {
        userid: req.body.userid
      }
    })
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.status(500).send(err)
    });
  },

  getCurrentStatuses: function(req, res) {

    var statuses = {
      'INTERESTED': 0,
      'APPLIED': 0,
      'INFO INTERVIEW': 0,
      'INTERVIEW': 0,
      'OFFER': 0
    }

    currentStatuses(req)
    .then((results) => {
      var data = results[0];
      for(var i = 0; i < data.length; i++){
        statuses[data[i]['status']] = data[i]['total']
      }
      res.send(statuses);
    })
    .catch((err) => {
      res.status(500).send(err)
    });
  }

};














