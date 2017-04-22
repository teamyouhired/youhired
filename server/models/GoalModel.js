var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/userModel');

var Goal = connection.define('goals', {
  numberofstatus: {
    type: Sequelize.INTEGER,
    allowNull: false,
    notEmpty: true
  },
  goaltype: {
    type: Sequelize.STRING(50),
    allowNull: false,
    notEmpty: true
  },
  goalduedate: {
    type: Sequelize.DATE,
    allowNull: false,
    notEmpty: true
  }
},{
  timestamps: true,
  createdAt: 'createdat',
  updatedAt: 'updatedat'
});

Goal.belongsTo(User, {foreignKey: 'userid'});
User.hasMany(Goal, {foreignKey: 'userid'});

module.exports = Goal;