var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel')
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ActivityLog = require('./../models/ActivityLogModel');
// var ContactApplicationJoin = require('./../models/ContactApplicationJoinModel');
var ApplicationContact = require('./../models/ApplicationContactJoinModel');
// var applicationContactCtrl = require('./applicationContactCtrl.js');



var addContact = function(req){
  return Contact.create({
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
    });
}

var consistencyContactQuery = function(data){
      return Contact.findOne({
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
          ],
        where: {
            id: data.dataValues.id
          }
      });
    }

var associateContactToApplication = function(req, data){
  return ApplicationContact.create({
       contactid: data.dataValues.id,
       applicationid: req.body.applicationid
  }).then(function(){
      console.log('Association completed between contactid and applicaitonid');
  }).catch((err) => {res.status(500).send(err)} );
}

module.exports = {

  addContactFromDashboard: function(req, res) {

      addContact(req).then((data) => {
      consistencyContactQuery(data).then((info) => {
        console.log('*********this is the info********', info);
        res.send(info);
      })
    }).catch((err) => {res.status(500).send(err)} );
  },

  addContactFromApplication: function(req, res) {

    addContact(req)
      .then((data) => {
      //if add contact works, then associate it to the user table
        associateContactToApplication(req, data)
        .then(() =>{
          consistencyContactQuery(data)
          .then((info) => {
            res.send(info);
            console.log(info);
          })
        })
    }).catch((err) => {res.status(500).send(err)} );
  }

  // associateContactToApplication: function(req, res) {

  // }




};