var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel')
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ActivityLog = require('./../models/ActivityLogModel');
var ContactApplicationJoin = require('./../models/ContactApplicationJoinModel');


module.exports = {

  addActivity: function(req, res) {

    //talk to folks about the need to create variables with names like 'applicationid', 'activitylogid', etc.

    //1. Invoke Dimitri's verify token formula!
    connection.sync({force: true})
    .then(() => {
      //assumes that verifyToken is a method on the User model
      User.verifyToken(user, userToken);
    })
    .then(() => {
      ActivityLog.create({
        userid: req.body.userid,
        applicationid: req.body.applicationid,
        activitytype: req.body.activitytype,
        activitylogcontent: req.body.activitylogcontent
        //jobarchiveurl: whatever url we get back from the site
      });
    }).then(function(info){
      res.send(info);
    }).catch('error!');

  }

};