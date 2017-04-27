var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var JobApplication = require('./../models/JobApplicationModel');


var Contact = connection.define('contacts', {

  contactfirstname: {
        type: Sequelize.STRING(50),
        allowNull: false,
        notEmpty: true
      },
  contactlastname: {
        type: Sequelize.STRING(50),
        allowNull: false,
        notEmpty: true
      },
  contactcompany: {
        type: Sequelize.STRING(100),
        allowNull: false,
        notEmpty: true
      },
  contactpositiontitle: {
        type: Sequelize.STRING(100),
        allowNull: false,
        notEmpty: true
      },
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

Contact.belongsTo(User, {foreignKey: 'userid'});
User.hasMany(Contact, {foreignKey: 'userid'});

module.exports = Contact;
