var pg = require('pg');
var Sequelize = require('sequelize');

var connection = require('./../db');
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');



var ActivityLog = connection.define('activitylogs', {
  seedactivitylogid: {
    type: Sequelize.INTEGER,
    unique: true
  },
  seedapplicationid: Sequelize.INTEGER,
  seedcontactid: Sequelize.INTEGER,
  activitytype: Sequelize.STRING(50),
  activitylogcontent: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
  timestamps: true,
  createdAt: 'createdat',
  updatedAt: 'updatedat'
});

ActivityLog.belongsTo(JobApplication, {
  foreignKey: 'applicationid',
  targetKey: 'id'
});

ActivityLog.belongsTo(Contact, {
  foreignKey: 'contactid',
  targetKey: 'id'
});

module.exports = ActivityLog;
