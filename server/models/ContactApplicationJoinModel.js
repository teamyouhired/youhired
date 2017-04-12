var pg = require('pg');
var Sequelize = require('sequelize');

var connection = require('./../db');

//TABLE CREATED IN RAW SQL FOR PURPOSES OF PULLING SEED DATA - WILL BECOME VESTIGIAL ONCE SEED DATA IS NO LONGER RELEVANT.

var ContactApplicationJoin = connection.define('contactapplicationjoin', {
  seedcontactid: Sequelize.INTEGER,
  seedapplicationid: Sequelize.INTEGER
}, {
  timestamps: true,
  createdAt: 'createdat',
  updatedAt: 'updatedat'
});

module.exports = ContactApplicationJoin;
