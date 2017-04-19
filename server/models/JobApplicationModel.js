var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/userModel');

var JobApplication = connection.define('jobapplications', {
  seedapplicationid: {
    type: Sequelize.INTEGER,
    unique: true
  },
  seeduserid: Sequelize.INTEGER,
  positionname: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  companyname: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  jobposturl: Sequelize.TEXT,
  jobfile: Sequelize.TEXT,
  status: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  companyaddress: Sequelize.STRING(150),
  companycity: Sequelize.STRING(150),
  companystate: Sequelize.STRING(2),
  companyzip: Sequelize.STRING(5),
  offersalary: Sequelize.STRING(10),
  offeroptions: Sequelize.TEXT,
  offerbenefits: Sequelize.TEXT
}, {
  timestamps: true,
  createdAt: 'createdat',
  updatedAt: 'updatedat'
});

// User.hasMany(JobApplication);

JobApplication.belongsTo(User, {
  foreignKey: 'userid'
  // targetKey: 'id'
});



module.exports = JobApplication;
