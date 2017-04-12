var pg = require('pg');
var Sequelize = require('sequelize');

var connection = require('./../db');
var User = require('./../models/UserModel');

var Contact = connection.define('contacts', {
  seedcontactid: {
    type: Sequelize.INTEGER,
    unique: true
  },
  seeduserid: Sequelize.INTEGER,
  contactfirstname: Sequelize.STRING(50),
  contactlastname: Sequelize.STRING(50),
  contactcompany: Sequelize.STRING(100),
  contactpositiontitle: Sequelize.STRING(100),
  contactphonenumber: Sequelize.STRING(14),
  contactemail: Sequelize.STRING(100),
  contactaddress: Sequelize.STRING(255),
  contactcity: Sequelize.STRING(100),
  contactstate: Sequelize.STRING(2),
  contactzip: Sequelize.INTEGER,
  secondaryphonenumber: Sequelize.STRING(14),
  secondaryemail: Sequelize.STRING(100),
  backgroundinformation: Sequelize.TEXT
}, {
  timestamps: true,
  createdAt: 'createdat',
  updatedAt: 'updatedat'
});

Contact.belongsTo(User, {
  foreignKey: 'userid',
  targetKey: 'id'
});

module.exports = Contact;
