var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/userModel');

var Goal = connection.define('goals', {
  numberofstatus: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  goaltype: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  goalduedate: {
    type: Sequelize.DATE,
    allowNull: false
  }
},{
  timestamps: true,
  createdAt: 'createdat',
  updatedAt: 'updatedat'
});

Goal.belongsTo(User, {
  foreignKey: 'userid'
  // targetKey: 'id'
});

module.exports = Goal;