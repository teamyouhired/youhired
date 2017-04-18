var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Goal = require('./../models/GoalModel');
var ActivityLog = require('./../models/ActivityLogModel');

module.exports = {

  addNewGoal: function(req, res){
    Goal.findOne({
      where: {
        userid: req.body.userid,
        goaltype: req.body.goaltype
      }
    }).then(() => {
      Goal.update({
        numberofstatus: req.body.numberofstatus,
        goalduedate: req.body.goalduedate
      },{
        fields: ['numberofstatus', 'goalduedate'],
        where: {
          userid: req.body.userid,
          goaltype: req.body.goaltype
        }
      }).then((info) => {
        res.send(info);
      })
    }).catch(() => {
      Goal.create({
        userid: req.body.userid,
        numberofstatus: req.body.numberofstatus,
        goaltype: req.body.goaltype,
        goalduedate: req.body.goalduedate
      }).then((info) => {
        res.send(info);
      })
    })
  },

  getGoalData: function(req, res) {
  //search activitylog by userid using a join table



  }

//get goal data

}