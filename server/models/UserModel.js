var pg = require('pg');
var Sequelize = require('sequelize');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var Token = require('./../models/TokenModel');

var connection = require('./../db');

var User = connection.define('users', {

  useremail: {
    type: Sequelize.STRING(100),
    notEmpty: true
  },
  userpassword: {
    type: Sequelize.STRING(255),
    unique: false,
    allowNull: false,
    notEmpty: true
  },
  userfirstname: {
    type: Sequelize.STRING(50),
    allowNull: true
  },
  userlastname: {
    type: Sequelize.STRING(50),
    allowNull: true
  }
}, {
  timestamps: true,
  createdAt: 'createdat',
  updatedAt: 'updatedat'
});

// hash passwords
User.hash = function (userpassword) {
  return bcrypt.hash(userpassword, 10)
  .then(hash => hash)
  .catch(err => {
    if (err) {
      console.log('err', err);
    }
  });
};

// generate authentication token
User.generateToken = function(userid) {
  return jwt.sign({userid: userid.toString(), access: 'auth'}, 'somesecret');
};

module.exports = User;

