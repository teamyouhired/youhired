var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel')
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ActivityLog = require('./../models/ActivityLogModel');
var ContactApplicationJoin = require('./../models/ContactApplicationJoinModel');


module.exports = {

  addActivity: function(req, res) {

    //talk to folks about the need to create variables with names like 'applicationid', 'activitylogid', etc.

    //1. Invoke Dimitri's verify token formula!
    connection.sync({force: true})
    .then(() => {
      //assumes that verifyToken is a method on the User model
      User.verifyToken(user, userToken);
    })
    .then(() => {
      ActivityLog.create({
        userid: req.body.userid,
        applicationid: req.body.applicationid,
        activitytype: req.body.activitytype,
        activitylogcontent: req.body.activitylogcontent
        //jobarchiveurl: whatever url we get back from the site
      });
    }).then(function(info){
      res.send(info);
    }).catch('error!');

  }

};

//SYNTAXES FOR QUERYING & UPDATING RECORDS!

// Project.find({ where: { title: 'aProject' } })
//   .on('success', function (project) {
//     // Check if record exists in db
//     if (project) {
//       project.updateAttributes({
//         title: 'a very different title now'
//       })
//       .success(function () {})
//     }
//   })



// var findUserDevice = function(userDeviceId){
//     // return the promise itself
//     return db.DeviceUser.find({
//         where: {
//            id: userDeviceId
//         }
//      }).then(function(device) {
//         if (!device) {
//             return 'not find';
//         }
//         return device.dataValues;
//      });
// };

//SYNTAXES FOR DESTROYING RECORDS
// Project.find(123).on('success', function(project) {
//   project.destroy().on('success', function(u) {
//     if (u && u.deletedAt) {
//       // successfully deleted the project
//     }
//   })
// })
