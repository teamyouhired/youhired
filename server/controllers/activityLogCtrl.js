var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel')
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ActivityLog = require('./../models/ActivityLogModel');
var ContactApplicationJoin = require('./../models/ContactApplicationJoinModel');







var consistencyActivityQuery = function(data){
      return ActivityLog.findOne({
        attributes:  [['id', 'activitylogid'],
          'activitytype',
          'activitylogcontent',
          'createdat'
        ],
        where: {
            id: data.dataValues.id
          }
      });
    }




module.exports = {

  addActivity: function(req, res) {

    ActivityLog.create({
      applicationid: req.body.applicationid,
      activitytype: req.body.activitytype,
      activitylogcontent: req.body.activitylogcontent
      //jobarchiveurl: whatever url we get back from the site
    })
    .then((data) => {
      consistencyActivityQuery(data).then((info) => {
        res.send(info);
        console.log(info);
      })
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
