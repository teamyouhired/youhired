var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');

var Token = connection.define('token', {
  token: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Token.belongsTo(User, {
  foreignKey: 'userid',
  targetKey: 'id'
});

module.exports = Token;