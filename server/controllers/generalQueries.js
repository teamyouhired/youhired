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

  getData: function (req, res) {
    console.log('youre in!');

    var applicationids = [];

    var data = {
      contacts: 0,
      jobApplications: []
    };

    Contact.findAll({
      where: {
        seeduserid: req.body.seeduserid
      }
    }).then(function(results) {
      data.contacts = results;
    }).then(function(){

      JobApplication.findAll({
        // attributes: ['id'],
        where: {
          seeduserid: req.body.seeduserid
        }
      }).then(function(results){
        for(var i = 0; i < results.length; i++){
          data.jobApplications.push({
            applicationdetails: results[i].dataValues
          });
          applicationids.push(results[i].dataValues['id']);
        }
      }).then(function(){
        res.send(data);
        console.log(applicationids);
      });

     }).error(function(err) {
      console.log('oh no', err);
    });
  }
};



// .then((data) => {
//       data.forEach(function(item){
//         appIdList.push(item);
//       });
//     })


  // "SELECT TO_CHAR(createdat, 'MON YYYY') AS createdat, positionname, companyname, status FROM jobapplications WHERE (seeduserid = 111111)";
  // var jobApplicationInfo = "SELECT TO_CHAR(createdat, 'MON YYYY') AS createdat, positionname, companyname, jobposturl, jobarchiveurl, status, companyaddress, companycity, companystate, companyzip, offersalary, offeroptions, offerbenefits FROM jobapplications WHERE (seeduserid = 111111 AND seedapplicationid = 444);";
  // var jobActivities = "SELECT TO_CHAR(createdat, 'DD MON YYYY   HH12:MI:SS') AS createdat, activitylogcontent FROM activitylogs WHERE seedapplicationid = 444 AND activitytype = 'NOTE' GROUP BY createdat, activitylogcontent ORDER BY createdat DESC;";
  // var jobContacts = "SELECT c.contactfirstname, c.contactlastname, c.contactcompany, c.contactpositiontitle, c.contactphonenumber, c.contactemail FROM ((contacts c INNER JOIN contactapplicationjoins j ON c.seedcontactid = j.seedcontactid) INNER JOIN jobApplications a ON j.seedapplicationid = a.seedapplicationid) WHERE a.seedapplicationid = 444;";

  // }




// {
//       attributes: [id, 'applicationid'],
//       where: {
//         seeduserid: req.body.seeduserid
//       }
//     }






