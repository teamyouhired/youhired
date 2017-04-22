var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');



var ActivityLog = connection.define('activitylogs', {
  activitytype: Sequelize.STRING(50),
  activitylogcontent: {
    type: Sequelize.TEXT,
    allowNull: false,
    notEmpty: true
  }
}, {
  timestamps: true,
  createdAt: 'createdat',
  updatedAt: 'updatedat'
});

ActivityLog.belongsTo(JobApplication, {foreignKey: 'applicationid'});
JobApplication.hasMany(ActivityLog, {foreignKey: 'applicationid'});

ActivityLog.belongsTo(Contact, {foreignKey: 'contactid'});
Contact.hasMany(ActivityLog, {foreignKey: 'contactid'});

module.exports = ActivityLog;
