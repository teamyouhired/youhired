var pg = require('pg');
var Sequelize = require('sequelize');

var connection = require('./../db');
var User = require('./../models/UserModel');

var JobApplication = connection.define('jobapplications', {
  seedapplicationid: {
    type: Sequelize.INTEGER,
    unique: true
  },
  seeduserid: Sequelize.INTEGER,
  positionname: Sequelize.STRING(100),
  companyname: Sequelize.STRING(100),
  jobposturl: Sequelize.TEXT,
  jobarchiveurl: Sequelize.TEXT,
  status: Sequelize.STRING(50),
  companyaddress: Sequelize.STRING(150),
  companycity: Sequelize.STRING(150),
  companystate: Sequelize.STRING(2),
  companyzip: Sequelize.STRING(5),
  offersalary: Sequelize.INTEGER,
  offeroptions: Sequelize.TEXT,
  offerbenefits: Sequelize.TEXT
}, {
  timestamps: true,
  createdAt: 'createdat',
  updatedAt: 'updatedat'
});

JobApplication.belongsTo(User, {
  foreignKey: 'userid',
  targetKey: 'id'
});

module.exports = JobApplication;
