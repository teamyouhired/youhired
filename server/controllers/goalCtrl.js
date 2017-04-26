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

  returnGoalInfo: function(req, res) {

    var results = { goalTracking: {}};

    var goalTypes = ['INTERESTED', 'APPLIED', 'INFO INTERVIEW', 'INTERVIEW'];

    var getGoalProgressByType = function(indexedItem){
      return connection.query("SELECT COUNT(a.activitylogcontent) AS total FROM ((activitylogs a INNER JOIN jobapplications j ON a.applicationid = j.id) INNER JOIN users u ON j.userid = u.id) WHERE u.id = :id AND a.activitytype = 'STATUSCHANGE' AND a.activitylogcontent = :indexedItem AND a.createdat >= (SELECT updatedat FROM goals WHERE userid = :id AND goaltype = :indexedItem) AND a.createdat < (SELECT goalduedate FROM goals WHERE userid = :id AND goaltype = :indexedItem) GROUP BY a.activitylogcontent;", {
          replacements: { indexedItem: indexedItem, id: req.body.userid}
        }).then((data) => {
          if(data[0][0]) {
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
        // currentStatuses().then((data) => {
        //   results['currentStatuses'] = data[0];
          res.send(results);

      } else {
        getGoalProgressByType(array[count])
        .then(() => {
          getGoalByType(array[count])
          .then(() => {
            subroutine(array, count += 1);
          })
        }).catch((err) => {res.status(500).send(err)})
      }
    }

    subroutine(goalTypes, 0);

  }

  // getGoalData: function(req, res){
  //   getGoalByType('INTERVIEW').then((data) => res.send(data));
  // }

//get goal data

}