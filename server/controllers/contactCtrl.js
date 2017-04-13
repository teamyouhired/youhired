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

  addContact: function(req, res) {

    //talk to folks about the need to create variables with names like 'applicationid', 'activitylogid', etc.

    //not sure if this 'null syntax will work...'

    //1. Invoke Dimitri's verify token formula!
    connection.sync({force: true})
    .then(() => {
      //assumes that verifyToken is a method on the User model
      User.verifyToken(user, userToken);
    })
    .then(() => {
      Contact.create({
        contactfirstname: req.body.contactfirstname,
        contactlastname: req.body.contactlastname,
        contactcompany: req.body.contactcompany,
        contactpositiontitle: req.body.contactpositiontitle,
        contactphonenumber: req.body.contactphonenumber || null,
        contactemail: req.body.contactemail || null,
        contactaddress: req.body.contactaddress || null,
        contactcity: req.body.contactcity || null,
        contactstate: req.body.contactstate || null,
        contactzip: req.body.contactzip || null,
        secondaryphonenumber: req.body.secondaryphonenumber || null,
        secondaryemail: req.body.secondaryemail || null,
        backgroundinformation: req.body.backgroundinformation || null
              //jobarchiveurl: whatever url we get back from the site
      });
    }).then(function(info){
      res.send(info);
    }).catch('error!');

  }

};