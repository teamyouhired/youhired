var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel')
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ActivityLog = require('./../models/ActivityLogModel');
var ApplicationContact = require('./../models/ApplicationContactJoinModel');

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

//Consistency queries exist so that the primary 'id' key can be given the appropriate alias of 'contactid', or 'applicationid' or 'activitylogid' as appropriate.  It eliminates duplicate field names from data going to the front end and provides them with greater clarity for tracking and updating state
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
  })
  .then(function(){
    console.log('Association completed between contactid and applicaitonid');
  })
  .catch((err) => {res.status(500).send(err)
  });
}

module.exports = {

  addContactFromDashboard: function(req, res) {

    addContact(req)
    .then((data) => {
      consistencyContactQuery(data)
      .then((info) => {
        res.send(info);
      })
    })
    .catch((err) => {
      res.status(500).send(err)
    });
  },

  addContactFromApplication: function(req, res) {

    addContact(req)
    .then((data) => {
      associateContactToApplication(req, data)
      .then(() =>{
        consistencyContactQuery(data)
        .then((info) => {
          res.send(info);
        })
      })
    })
    .catch((err) => {
      res.status(500).send(err)
    });
  }

};