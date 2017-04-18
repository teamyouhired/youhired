var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');

var ApplicationContact = connection.define('applicationcontacts', {});

Contact.belongsToMany(JobApplication, {through: 'applicationcontacts', foreignKey: 'contactid' });
JobApplication.belongsToMany(Contact, {through: 'applicationcontacts', foreignKey: 'applicationid' });

module.exports = ApplicationContact;
