var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel')
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ActivityLog = require('./../models/ActivityLogModel');
var ContactApplicationJoin = require('./../models/ContactApplicationJoinModel');
var Promise = require('bluebird');


// module.exports = {

//   getData: function(req, res){
//     User.findAll({
//     where: {
//       seeduserid: req.body.seeduserid
//     },
//     include: [{model: connection.JobApplication}]
//     }).then((data) => {res.send(data)})
//   }
// }


module.exports = {

  getData: function (req, res) {
    // console.log('youre in!');

    // var applicationids = [];

    var applicationids = [];

    var data = {
      jobapplications: []
    };

    var applications;

    var getContacts = function(){
      return Contact.findAll({
        attributes: [['id', 'contactid'],
        'contactfirstname',
        'contactlastname',
        'contactcompany',
        'contactpositiontitle',
        'contactphonenumber',
        'contactemail',
        'contactaddress',
        'contactcity',
        'contactstate',
        'contactzip',
        'secondaryphonenumber',
        'secondaryemail',
        'backgroundinformation'
        ],
        where: {
          seeduserid: req.body.seeduserid
        }
      });
    }

    var getApplications = function(){
      return JobApplication.findAll({
        where: {
          seeduserid: req.body.seeduserid
        }
      });
    }


    var getActivitiesForApplication = function(id){
      return ActivityLog.findAll({
        where: {
          seedapplicationid: id
        }
      });
    }

    var getContactsForApplication = function(id){
      return connection.query('SELECT c.contactfirstname, c.contactlastname, c.contactcompany, c.contactpositiontitle, c.contactphonenumber, c.contactemail, c.contactaddress, c.contactcity, c.contactstate, c.contactzip, c.secondaryphonenumber, c.secondaryemail, c.backgroundinformation FROM ((contacts c INNER JOIN contactapplicationjoins j ON c.seedcontactid = j.seedcontactid) INNER JOIN jobApplications a ON j.seedapplicationid = a.seedapplicationid) WHERE a.seedapplicationid = :id ', {
          replacements: { id: id}
        });
    };


//query to get applications, save to variable.



//applicationid, which will be in application[i]
//1.  get activites for application (query)
//2.  push activities array to application.activities (processing query results)
//3.  get contacts for application (query)
//4.  push contacts for application (processing query results)

//thunk invocations can be 'steps' in promise.all

    var loopThroughApplications = function(array, count){

      if(count === array.length){
          console.log(count);
          res.send(data);
          return;
        } else {
          console.log(count);
          var item = applications[count];
          data['jobapplications'].push({
            details: item['dataValues']
          });
          var id = item['dataValues']['seedapplicationid'];
          getActivitiesForApplication(id)
          .then((result) => {
            // console.log(data['jobapplications'][index]);
            data['jobapplications'][count]['activities'] = result || [];
            // console.log(data['jobapplications'][count]['activities']);
          }).then(() => {
            var id = item['dataValues']['seedapplicationid'];
            getContactsForApplication(id)
              .then((result) => {
                  console.log(count);
                  data['jobapplications'][count]['contacts'] = result[0] || [];
              }).then(() => {
                  loopThroughApplications(array, count += 1)
                })
              })
      }
    };




    getContacts()
    .then((results) => {
      data['contacts'] = results;
    })
    .then(() => {
      getApplications()
        .then((results) => {
          applications = results;
          // console.log(applications);
        })
        .then(() => {
          // var count = 0;
          loopThroughApplications(applications, 0)
          // res.send(data);
      })
    }).catch((error) => {
      console.log(error);
    });
  }
};