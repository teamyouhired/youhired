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
          //jobarchiveurl: whatever url we get back from the site
        })
        //gets all the job info from newly created record and sends to the front end!
        .then(function(info){
          res.send(info);
        }).catch('error!');
  },

  // retrieveArchivedUrl: function(req, res) {

  // },


  // retrieveArchivedUrl: function(req, res) {
  //   return blah;
  // },

  addInterview: function(req, res) {
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
    }).then(function(info){
      res.send(info);
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
    }).then(function(info){
      res.send(info);
    }).catch('error!');
  }

  // updatestatus: function(req, res) {

  // }


};
