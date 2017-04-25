var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');

//IMPORT MODELS
var User = require('./../models/userModel');
var Token = require('./../models/TokenModel')
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ActivityLog = require('./../models/ActivityLogModel');
var ContactApplicationJoin = require('./../models/ContactApplicationJoinModel');
var Goal = require('./../models/GoalModel');
var ApplicationContact = require('./../models/ApplicationContactJoinModel');

//IMPORT CONTROLLERS
const userCtrl = require('./userCtrl.js');
// const seedCtrl = require('./seedCtrl.js');
const tokenCtrl = require('./tokenCtrl.js');
const jobApplicationCtrl = require('./jobApplicationCtrl.js');
const contactCtrl = require('./contactCtrl.js');
const activityLogCtrl = require('./activityLogCtrl.js');
const applicationContactCtrl = require('./applicationContactCtrl.js');
const goalCtrl = require('./goalCtrl.js');




module.exports = {

  setUpTables: function(req, res){

    connection.sync();
    res.send('Table set up complete!');
    console.log('Table set up complete!');
  },

  seed: function(req, res){
    Goal.create({
      userid: req.body.userid,
      numberofstatus: 10,
      goaltype: 'INTERESTED',
      goalduedate: '2017-07-01T00:00:00.166Z'
    })
    .then(() => {
      Goal.create({
        userid: req.body.userid,
        numberofstatus: 8,
        goaltype: 'APPLIED',
        goalduedate: '2017-07-01T00:00:00.166Z'
      })
    }).then(() => {
      Goal.create({
        userid: req.body.userid,
        numberofstatus: 4,
        goaltype: 'INFO INTERVIEW',
        goalduedate: '2017-07-01T00:00:00.166Z'
      })
    }).then(() => {
      Goal.create({
        userid: req.body.userid,
        numberofstatus: 3,
        goaltype: 'INTERVIEW',
        goalduedate: '2017-07-01T00:00:00.166Z'
      })
    }).then(() => {
      JobApplication.create({
        userid: req.body.userid,
        positionname: "Senior Front End Developer",
        companyname: "Google",
        status: 'INTERESTED',
        jobposturl: "www.google.com"
      })
    }).then(() => {
      JobApplication.create({
        userid: req.body.userid,
        positionname: "Back End Developer",
        companyname: "Facebook",
        status: 'INTERESTED',
        jobposturl: "www.facebook.com"
      })
    }).then(() => {
      JobApplication.create({
        userid: req.body.userid,
        positionname: "Full Stack Developer",
        companyname: "Datastax",
        status: 'INTERESTED',
        jobposturl: "www.datastax.com"
      })
    }).then(() => {
      JobApplication.create({
        userid: req.body.userid,
        positionname: "Software Engineer",
        companyname: "Pinterest",
        status: 'INTERESTED',
        jobposturl: "www.pinterest.com"
      })
    }).then(() => {
      JobApplication.create({
        userid: req.body.userid,
        positionname: "Software Developer",
        companyname: "Uber",
        status: 'INTERESTED',
        jobposturl: "www.uber.com"
      })
    }).then(() => {
      JobApplication.create({
        userid: req.body.userid,
        positionname: "Software Engineer - Full Stack",
        companyname: "Homeaway",
        status: 'INTERESTED',
        jobposturl: "www.homeaway.com"
      })
    }).then(() => {
      JobApplication.create({
        userid: req.body.userid,
        positionname: "Front End Engineer",
        companyname: "Youtube",
        status: 'INTERESTED',
        jobposturl: "www.youtube.com"
      })
    }).then(() => {
      JobApplication.create({
        userid: req.body.userid,
        positionname: "Senior Front End Developer - iOS",
        companyname: "Apple",
        status: 'INTERESTED',
        jobposturl: "www.apple.com",

      }).then((info) => {
        var id = info.dataValues.id;
        ActivityLog.create({
          applicationid: id,
          activitytype: 'NOTE',
          activitylogcontent: 'saw job and applied'
        }).then(() => {
            ActivityLog.create({
              applicationid: id,
              activitytype: 'NOTE',
              activitylogcontent: 'saw job and applied'
          })
        }).then(() => {
            ActivityLog.create({
              applicationid: id,
              activitytype: 'NOTE',
              activitylogcontent: 'saw job and applied'
          })
        }).then(() => {
            ActivityLog.create({
              applicationid: id,
              activitytype: 'NOTE',
              activitylogcontent: 'saw job and applied'
          })
        }).then(() => {
            ActivityLog.create({
              applicationid: id,
              activitytype: 'NOTE',
              activitylogcontent: 'saw job and applied'
          })
        }).then(() => {
            ActivityLog.create({
              applicationid: id,
              activitytype: 'NOTE',
              activitylogcontent: 'saw job and applied'
          })
        }).then(() => {
            ActivityLog.create({
              applicationid: id,
              activitytype: 'NOTE',
              activitylogcontent: 'saw job and applied'
          })
        }).then(() => {
            ActivityLog.create({
              applicationid: id,
              activitytype: 'NOTE',
              activitylogcontent: 'saw job and applied'
          })
        }).then(() => {
            ActivityLog.create({
              applicationid: id,
              activitytype: 'NOTE',
              activitylogcontent: 'saw job and applied'
          })
        }).then(() => {
            ActivityLog.create({
              applicationid: id,
              activitytype: 'NOTE',
              activitylogcontent: 'saw job and applied'
          })
        }).then(() => {
            ActivityLog.create({
              applicationid: id,
              activitytype: 'NOTE',
              activitylogcontent: 'saw job and applied'
          })
        }).then(() => {
            ActivityLog.create({
              applicationid: id,
              activitytype: 'NOTE',
              activitylogcontent: 'saw job and applied'
          })
        }).then(() => {
            ActivityLog.create({
              applicationid: id,
              activitytype: 'NOTE',
              activitylogcontent: 'saw job and applied'
          })
        }).then(() => {
          Contact.create({
            contactfirstname: 'Betty',
            contactlastname: 'Cragsdale',
            contactcompany: 'Apple',
            contactpositiontitle: 'HR Recruiter',
            contactphonenumber: '(212) 573-5839',
            contactemail: 'cragsdale@apple.com'
          }).then((info) => {
            var contid = info.dataValues.id;
            ApplicationContact.create({
               contactid: contid,
               applicationid: id
            })
          })
        }).then(() => {
          Contact.create({
            contactfirstname: 'Rodrigo',
            contactlastname: 'DeSouza',
            contactcompany: 'Recruiters Inc.',
            contactpositiontitle: 'Third Party Recruiter',
            contactphonenumber: '(212) 573-5839',
            contactemail: 'rodrigo@desouza.com'
          }).then((info) => {
            var contid = info.dataValues.id;
            ApplicationContact.create({
               contactid: contid,
               applicationid: id
            })
          })
        }).then(() => {
          Contact.create({
            contactfirstname: 'Hailey',
            contactlastname: 'Rutlidge',
            contactcompany: 'Apple',
            contactpositiontitle: 'Team Lead',
            contactphonenumber: '(212) 573-5839',
            contactemail: 'hailey@apple.com'
          }).then((info) => {
            var contid = info.dataValues.id;
            ApplicationContact.create({
               contactid: contid,
               applicationid: id
            })
          })
        })

      })

    }).then(() => {
      JobApplication.create({
        userid: req.body.userid,
        positionname: "Senior Front End Developer",
        companyname: "Adobe",
        status: 'INTERESTED',
        jobposturl: "www.adobe.com"
      })
    }).then(() => {
      JobApplication.create({
        userid: req.body.userid,
        positionname: "JavaScript Developer",
        companyname: "Facebook",
        status: 'INTERESTED',
        jobposturl: "www.facebook.com"
      })
    }).then(() => {
      JobApplication.create({
        userid: req.body.userid,
        positionname: "Senior Front End Developer",
        companyname: "US Government",
        status: 'INTERESTED',
        jobposturl: "www.usajobs.com"
      })
    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {

    }).then(() => {
      res.send('all done!');
    })
  }

}