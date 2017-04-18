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

  addContactFromUser: function(req, res) {

      Contact.create({
        userid: req.body.userid,
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
    }).then(function(info){
      res.send(info);
    }).catch('error!');

  },

  addContactFromApplication: function(req, res) {

  },

  associateContactToApplication: function(req, res) {

  }




};