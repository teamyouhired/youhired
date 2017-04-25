var pg = require('pg');
var Sequelize = require('sequelize');

var User = require('./../models/UserModel');
var connection = require('./../db');

var Token = connection.define('token', {
  auth: {
    type: Sequelize.TEXT,
    allowNull: false,
    notEmpty: true
  }
});

Token.belongsTo(User, {foreignKey: 'userid'});
User.hasMany(Token, {foreignKey: 'userid'});

module.exports = Token;
