var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel')
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ActivityLog = require('./../models/ActivityLogModel');
var ContactApplicationJoin = require('./../models/ContactApplicationJoinModel');

//CREATE A NEW JOB APPLICATION

module.exports = {

  createApplication: function(req, res) {

    //1. Invoke Dimitri's verify token formula!
      //assumes that verifyToken is a method on the User model
      User.authenticate(req, res, function(){

        console.log('add functionality that sends jobPostUrl to site and returns archive URL.  Data received back should be an argument to next function in the chain')

        JobApplication.create({
          userid: req.body.userid,
          positionname: req.body.positionname,
          companyname: req.body.companyname,
          jobposturl: req.body.jobposturl
          //jobarchiveurl: whatever url we get back from the site
        })
        //gets all the job info from newly created record and sends to the front end!
        .then(function(info){
        res.send(info);
      }).catch('error!');
    });
  };

  retrieveArchivedUrl: function(req, res) {
    return blah;
  };

  addInterview: function(req, res) {

  };

  addJobOffer: function(req, res) {

  };

  updatestatus: function(req, res) {

  };

};