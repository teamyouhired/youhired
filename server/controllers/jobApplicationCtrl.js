var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel');
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ActivityLog = require('./../models/ActivityLogModel');
var ContactApplicationJoin = require('./../models/ContactApplicationJoinModel');

//CREATE A NEW JOB APPLICATION

var consistencyApplicationQuery = function(id){
      return JobApplication.findOne({
        attributes: [
          ['id', 'applicationid'],
          'positionname',
          'companyname',
          'jobposturl',
          'jobarchiveurl',
          'status',
          'companyaddress',
          'companycity',
          'companystate',
          'companyzip',
          'offersalary',
          'offeroptions',
          'offerbenefits',
          'userid'
          ],
        where: {
            id: id
          }
      });
    }


module.exports = {

  addApplication: function(req, res) {

console.log('req.body.userid --- ',req.body.userid);
    //1. Invoke Dimitri's verify token formula!
      //assumes that verifyToken is a method on the User model

        console.log('add functionality that sends jobPostUrl to site and returns archive URL.  Data received back should be an argument to next function in the chain');

        JobApplication.create({
          userid: req.body.userid,
          status: req.body.status,
          positionname: req.body.positionname,
          companyname: req.body.companyname,
          jobposturl: req.body.jobposturl
          // jobarchiveurl: whatever url we get back from the site
        })
        //gets all the job info from newly created record and sends to the front end!
        .then((data) => {
          consistencyApplicationQuery(data.dataValues.id).then((info) => {
            res.send(info);
            console.log(info);
          })
        }).catch('error!');
  },

  // retrieveArchivedUrl: function(req, res) {

  // },


  // retrieveArchivedUrl: function(req, res) {
  //   return blah;
  // },

  addInterview: function(req, res) {
    console.log(req.body.applicationid);
    JobApplication.update({
      companyaddress: req.body.companyaddress,
      companycity: req.body.companycity,
      companystate: req.body.companystate,
      companyzip: req.body.companyzip
    },{
      fields: ['companyaddress', 'companycity', 'companystate', 'companyzip'],
      where: {
        id: req.body.applicationid
      }
    }).then(() => {
      var id = req.body.applicationid;
      consistencyApplicationQuery(id).then((info) => {
        res.send(info);
        console.log(info);
      })
    }).catch('error!');
  },

  addJobOffer: function(req, res) {
   JobApplication.update({
      offersalary: req.body.offersalary,
      offeroptions: req.body.offeroptions,
      offerbenefits: req.body.offerbenefits
    },{
      fields: ['offersalary', 'offeroptions', 'offerbenefits'],
      where: {
        id: req.body.applicationid
      }
    }).then((data) => {
      consistencyApplicationQuery(data).then((info) => {
        res.send(info);
        console.log(info);
      })
    }).catch('error!');
  },

  updateStatus: function(req, res) {
    JobApplication.update({
      status: req.body.status,
    },{
      fields: ['status'],
      where: {
        id: req.body.applicationid
      }
    }).then(() => {
      ActivityLog.create({
      applicationid: req.body.applicationid,
      activitytype: 'STATUSCHANGE',
      activitylogcontent: req.body.status
      //jobarchiveurl: whatever url we get back from the site
      })
      .then(function(info){
        res.send(info);
      })
    }).catch('error!');
  }


};
