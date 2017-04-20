var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel')
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ActivityLog = require('./../models/ActivityLogModel');
var ContactApplicationJoin = require('./../models/ContactApplicationJoinModel');







var consistencyActivityQuery = function(data){
      return ActivityLog.findOne({
        attributes:  [['id', 'activitylogid'],
          'applicationid',
          'activitytype',
          'activitylogcontent',
          'createdat'
        ],
        where: {
            id: data.dataValues.id
          }
      });
    }




module.exports = {

  addActivity: function(req, res) {

    ActivityLog.create({
      applicationid: req.body.applicationid,
      activitytype: 'NOTE',
      activitylogcontent: req.body.activitylogcontent
    })
    .then((data) => {
      consistencyActivityQuery(data).then((info) => {
        res.send(info);
        console.log(info);
      })
    }).catch('error!');
  }
};




