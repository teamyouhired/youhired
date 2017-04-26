var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ApplicationContact = require('./../models/ApplicationContactJoinModel');

module.exports = {

    associateContactWithApplication: function(req, res) {
     ApplicationContact.create({
       contactid: req.body.contactid,
       applicationid: req.body.applicationid
    }).then(function(info){
        res.send(info);
    }).catch((err) => {res.status(500).send(err)} );
  }

}