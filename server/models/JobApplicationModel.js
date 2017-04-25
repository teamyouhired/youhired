var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');

var JobApplication = connection.define('jobapplications', {

  positionname: {
    type: Sequelize.STRING(100),
    allowNull: false,
    notEmpty: true
  },
  companyname: {
    type: Sequelize.STRING(100),
    allowNull: false,
    notEmpty: true
  },
  jobposturl: Sequelize.TEXT,
  jobfile: Sequelize.TEXT,
  status: {
    type: Sequelize.STRING(50),
    allowNull: false,
    notEmpty: true
  },
  companyaddress: Sequelize.STRING(1000),
  interviewdatetime: Sequelize.DATE,
  offersalary: Sequelize.STRING(10),
  offeroptions: Sequelize.TEXT,
  offerbenefits: Sequelize.TEXT
}, {
  timestamps: true,
  createdAt: 'createdat',
  updatedAt: 'updatedat'
});

// User.hasMany(JobApplication);

JobApplication.belongsTo(User, {foreignKey: 'userid'});
User.hasMany(JobApplication, {foreignKey: 'userid'});


module.exports = JobApplication;
