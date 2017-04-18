var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel')
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ActivityLog = require('./../models/ActivityLogModel');
var ContactApplicationJoin = require('./../models/ContactApplicationJoinModel');



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
            'backgroundinformation'
          ],
        where: {
            id: data.dataValues.id
          }
      });
    }



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
    }).then((data) => {
      consistencyContactQuery(data).then((info) => {
        res.send(info);
        console.log(info);
      })
    }).catch('error!');
  }




  // associateContactToApplication: function(req, res) {

  // }




};