var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Goal = require('./../models/GoalModel');
var ActivityLog = require('./../models/ActivityLogModel');

module.exports = {

  addNewGoal: function(req, res){

    //function that converts chars to datetime
    //2017-06-30 17:00:00.166-07
    function toTimestamp(input){
      var string = input;
      var timestampResult = [];
      //consider 06/30/2017
      var arr = string.split('/');
      timestampResult.push(arr[2]);
      timestampResult.push(arr[0]);
      timestampResult.push(arr[1]);
      return timestampResult.join('-') + ' 00:00:00.166-07';
    }

    Goal.findOne({
      where: {
        userid: req.body.userid,
        goaltype: req.body.goaltype
      }
    }).then((data) => {
      if (data === null) {

        Goal.create({
          userid: req.body.userid,
          numberofstatus: req.body.numberofstatus,
          goaltype: req.body.goaltype,
          goalduedate: toTimestamp(req.body.goalduedate)
        })

    } else {

        Goal.update({
          numberofstatus: req.body.numberofstatus,
          goalduedate: toTimestamp(req.body.goalduedate)
        },{
          fields: ['numberofstatus', 'goalduedate'],
          where: {
            userid: req.body.userid,
            goaltype: req.body.goaltype
          }
        })
      }
    }).then((info) => {
        res.send(info);
      })
  },

  getGoalData: function(req, res) {
  //search activitylog by userid using a join table



  }

//get goal data

}