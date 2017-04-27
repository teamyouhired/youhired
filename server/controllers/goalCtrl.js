var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Goal = require('./../models/GoalModel');
var ActivityLog = require('./../models/ActivityLogModel');

module.exports = {

  addNewGoal: function(req, res){

    var toTimestamp = function(input){

      var string = input;

      var timestampResult = [];

      var separators = [' ', '\\/', '-'];

      var arr = string.split(new RegExp('[' + separators.join('') + ']', 'g'));

      timestampResult.push(arr[2]);
      timestampResult.push(arr[1]);
      timestampResult.push(arr[0]);
      return timestampResult.join('-') + ' 00:00:00 -' + arr[3];
    }

    Goal.findOne({
      where: {
        userid: req.body.userid,
        goaltype: req.body.goaltype
      }
    })
    .then((data) => {
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
    })
    .then((info) => {
      res.send(info);
    })
  },

  returnGoalInfo: function(req, res) {

    var results = { goalTracking: {}};

    var goalTypes = ['INTERESTED', 'APPLIED', 'INFO INTERVIEW', 'INTERVIEW'];

    //The query below returns all of the goal types ('INTERESTED', 'APPLIED', 'INFO INTERVIEW', 'INTERVIEW')) and the progress that a user is making towards those goals. Goals in the database are represented as the number of changes to a given status that occur between the goal creation date and the goal due date.  The status changes themselves are logged 'behind the scenes' in the activitylogs table.  They are given their own activity type 'STATUSCHANGE' and are given a created date.  The created date for each status change is used to assess whether or not the status change occured before, during or after the goal period.  If it occurred during, it is counted and registered in the total.

    var getGoalProgressByType = function(indexedItem){
      return connection.query("SELECT COUNT(a.activitylogcontent) AS total FROM ((activitylogs a INNER JOIN jobapplications j ON a.applicationid = j.id) INNER JOIN users u ON j.userid = u.id) WHERE u.id = :id AND a.activitytype = 'STATUSCHANGE' AND a.activitylogcontent = :indexedItem AND a.createdat >= (SELECT updatedat FROM goals WHERE userid = :id AND goaltype = :indexedItem) AND a.createdat < (SELECT goalduedate FROM goals WHERE userid = :id AND goaltype = :indexedItem) GROUP BY a.activitylogcontent;", {
          replacements: { indexedItem: indexedItem, id: req.body.userid}
      })
      .then((data) => {
        if (data[0][0]) {
          results['goalTracking'][indexedItem] = {
            progress: data[0][0]['total']
          };
        } else {
          results['goalTracking'][indexedItem] = {
            progress: 0
          };
        }
      });
    };

    //Query returns information about currently existing goals.  The query returns the type, goal due date, the progress (number of each type) the user wants to have completed by that dateThere are, by design, never more than four goals total, and are always one goal for each type of goal ('INTERESTED', 'APPLIED', 'INFO INTERVIEW', 'INTERVIEW').

    var getGoalByType = function(indexedItem){
      return connection.query("SELECT numberofstatus, goaltype, TO_CHAR(goalduedate, 'DD MON YYYY') AS goalduedate FROM goals WHERE goaltype = :indexedItem AND userid = :id;", {
        replacements: {
           indexedItem: indexedItem,
           id: req.body.userid
        }
      })
      .then((data) => {
        var info = data[0][0];
        results['goalTracking'][indexedItem]['goalTotal'] = info['numberofstatus'];
        results['goalTracking'][indexedItem]['goalduedate'] = info['goalduedate'];
      })
    };

    var subroutine = function(array, count){
      if(count >= array.length){
          res.send(results);
      } else {
        getGoalProgressByType(array[count])
        .then(() => {
          getGoalByType(array[count])
          .then(() => {
            subroutine(array, count += 1);
          })
        }).catch((err) => {
          res.status(500).send(err)
        })
      }
    }
    subroutine(goalTypes, 0);
  }

}