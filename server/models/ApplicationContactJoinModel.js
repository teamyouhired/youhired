var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');

//join table between Contact and JobApplication
//join model is created through use of the 'through' attribute below.

Contact.belongsToMany(JobApplication, {through: 'applicationcontactjoin', foreignKey: 'contactid' })
JobApplication.belongsToMany(Contact, {through: 'applicationcontactjoin', foreignKey: 'applicationid' })





