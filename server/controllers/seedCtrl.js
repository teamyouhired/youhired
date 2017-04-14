var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel')
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ActivityLog = require('./../models/ActivityLogModel');
var ContactApplicationJoin = require('./../models/ContactApplicationJoinModel');

var jobsList = "SELECT TO_CHAR(createdat, 'MON YYYY') AS createdat, positionname, companyname, status FROM jobapplications WHERE (seeduserid = 111111)";
var jobApplicationInfo = "SELECT TO_CHAR(createdat, 'MON YYYY') AS createdat, positionname, companyname, jobposturl, jobarchiveurl, status, companyaddress, companycity, companystate, companyzip, offersalary, offeroptions, offerbenefits FROM jobapplications WHERE (seeduserid = 111111 AND seedapplicationid = 444);";
var jobActivities = "SELECT TO_CHAR(createdat, 'DD MON YYYY   HH12:MI:SS') AS createdat, activitylogcontent FROM activitylogs WHERE seedapplicationid = 444 AND activitytype = 'NOTE' GROUP BY createdat, activitylogcontent ORDER BY createdat DESC;";
var jobContacts = "SELECT c.contactfirstname, c.contactlastname, c.contactcompany, c.contactpositiontitle, c.contactphonenumber, c.contactemail FROM ((contacts c INNER JOIN contactapplicationjoins j ON c.seedcontactid = j.seedcontactid) INNER JOIN jobApplications a ON j.seedapplicationid = a.seedapplicationid) WHERE a.seedapplicationid = 444;";

module.exports = {

  //information for the jobs page

  sendSeedData: function(req, res) {

    var data = [];
    connection.query(jobsList)
    .then(function(result) {
       data.push(result[0]);
    })
    .then(function(){
      connection.query(jobApplicationInfo)
      .then(function(result) {
        data.push(result[0]);
      })
      .then(function(){
        connection.query(jobActivities)
        .then(function(result) {
          data.push(result[0]);
        })
        .then(function(){
          connection.query(jobContacts)
          .then(function(result) {
            data.push(result[0]);
            res.send(data);
          })
        })
      })
    });
    // .then(function(){

    // });

    // .query(jobApplicationInfo).then(function(result) {
    //   data.push(result[0]);
    // }).query(jobActivities).then(function(result) {
    //   data.push(result[0]);
    // }).query(jobContacts).then(function(result) {
  },

  seedDatabase: function(req, res) {

    connection.sync({force: true}).then(
      function() {
        User.create({
          seeduserid: 111111,
          useremail: 'samsimple@gmail.com',
          userpassword: '$2a$10$9nAbMiiI.6Sw.VT.NSUgKOtU/yeKupPjSZ5mpAgSGxdEWtzAWcxoO',
          userfirstname: 'Sam',
          userlastname: 'Simple'
        });
      }).then(
      function() {
        User.create({
          seeduserid: 222222,
          useremail: 'susysimple@gmail.com',
          userpassword: '$2a$10$9nAbMiiI.6Sw.VT.NSUgKOtU/yeKupPjSZ5mpAgSGxdEWtzAWcxo',
          userfirstname: 'Susy',
          userlastname: 'Simple'
        });
      }
    ).then(
      function() {
        User.create({
          seeduserid: 333333,
          useremail: 'johndoe@gmail.com',
          userpassword: '$2a$10$9nAbMiiI.6Sw.VT.NSUgKOtU/yeKupPjSZ5mpAgSGxdEWtzAWcxoO',
          userfirstname: 'John',
          userlastname: 'Doe'
        });
      }
    ).then(
      function() {
        User.create({
          seeduserid: 444444,
          useremail: 'janedoe@gmail.com',
          userpassword: '$2a$10$9nAbMiiI.6Sw.VT.NSUgKOtU/yeKupPjSZ5mpAgSGxdEWtzAWcxoO',
          userfirstname: 'John',
          userlastname: 'Doe'
        });
      }
    ).then(
      function() {
        JobApplication.create({
          seedapplicationid: 222,
          seeduserid: 111111,
          positionname: 'Open feedback dialog Principal, Strategy and Business Operations, Google Cloud',
          companyname: 'Google',
          jobposturl: 'www.google.com',
          jobarchiveurl: 'http://res.cloudinary.com/dlsmih11r/image/upload/v1491607406/Strategic_Account_Specialist_Google_Cloud_Google_LinkedIn_liseeq.pdf',
          status: 'INTERVIEW',
          companyaddress: 'One Great Google Way',
          companycity: 'Mountain View',
          companystate: 'CA',
          companyzip: 94015,
          offersalary: null,
          offeroptions: null,
          offerbenefits: null,
          userid: 1
        });
      }
    ).then(
      function() {
        JobApplication.create({
          seedapplicationid: 333,
          seeduserid: 111111,
          positionname: 'Leasing Specialist ­Xchange',
          companyname: 'Uber',
          jobposturl: 'www.uber.com',
          jobarchiveurl: 'http://res.cloudinary.com/dlsmih11r/image/upload/v1491607406/Careers_at_Uber_Leasing_Specialist_-_Xchange_-_Richmond_CA_jqddoy.pdf',
          status: 'INTERVIEW',
          companyaddress: '1000 Awesome Uber Way',
          companycity: 'Oakland',
          companystate: 'CA',
          companyzip: 58438,
          offersalary: null,
          offeroptions: null,
          offerbenefits: null
        });
      }
    ).then(
      function() {
        JobApplication.create({
          seedapplicationid: 111,
          seeduserid: 111111,
          positionname: 'Business Analyst',
          companyname: 'LifeLock',
          jobposturl: 'www.lifelock.com',
          jobarchiveurl: 'http://res.cloudinary.com/dlsmih11r/image/upload/v1491607406/Business_Analyst_LifeLock_LinkedIn_rq6sep.pdf',
          status: 'INTERESTED',
          companyaddress: null,
          companycity: null,
          companystate: null,
          companyzip: null,
          offersalary: null,
          offeroptions: null,
          offerbenefits: null
        });
      }
    ).then(
      function() {
        JobApplication.create({
          seedapplicationid: 444,
          seeduserid: 111111,
          positionname: 'Security Engineer, Information Security',
          companyname: 'Pinterest',
          jobposturl: 'www.pinterest.com',
          jobarchiveurl: 'http://res.cloudinary.com/dlsmih11r/image/upload/r_11/v1491607405/Security_Engineer_Information_Security_Pinterest_Careers_od1vyr.pdf',
          status: 'OFFER',
          companyaddress: '12 Pinterest Point',
          companycity: 'San Francisco',
          companystate: 'CA',
          companyzip: 94101,
          offersalary: 110000,
          offeroptions: '1000 shares at $10 each',
          offerbenefits: 'Health, Dental, 4 weeks paid vacation'
        });
      }
    ).then(
      function() {
        JobApplication.create({
          seedapplicationid: 555,
          seeduserid: 111111,
          positionname: 'Web Producer',
          companyname: 'Okta',
          jobposturl: 'www.okta.com',
          jobarchiveurl: 'http://res.cloudinary.com/dlsmih11r/image/upload/v1491607405/Web_Producer_-_Okta_Jobs.com_ltemve.pdf',
          status: 'OFFER',
          companyaddress: '12 Okta Way',
          companycity: 'San Francisco',
          companystate: 'CA',
          companyzip: 94401,
          offersalary: 120000,
          offeroptions: '2000 shares at $10 each',
          offerbenefits: 'Health, Dental, Vision, childcare'
        });
      }
    ).then(
      function() {
        Contact.create({
          seedcontactid: 123451,
          seeduserid: 111111,
          contactfirstname: 'Connie',
          contactlastname: 'Machado',
          contactcompany: 'JobsRUs',
          contactpositiontitle: 'Tech Recruiter',
          contactphonenumber: '(291) 391-1928',
          contactemail: 'cmachado@gmail.com',
          contactaddress: 'contactaddress',
          contactcity: 'San Jose',
          contactstate: 'CA',
          contactzip: 94931,
          secondaryphonenumber: '(111) 291-4932',
          secondaryemail: 'connie@hotmail.com',
          backgroundinformation: 'met at a convention last week.  Very cool lady, who said she would be interested in helping me finding a job.  She said that she liked Hack Reactor a lot and had had success placing their students'
        });
      }
    ).then(
      function() {
        Contact.create({
          seedcontactid: 123452,
          seeduserid: 111111,
          contactfirstname: 'Bradford',
          contactlastname: 'Sharpe',
          contactcompany: 'Pinterest',
          contactpositiontitle: 'VP Engineering',
          contactphonenumber: '(111) 291-4932',
          contactemail: 'bsharpe@pinterest.com',
          contactaddress: '3821 Pinterest Place',
          contactcity: 'San Francisco',
          contactstate: 'CA',
          contactzip: 48321,
          secondaryphonenumber: '(222) 222-2222',
          secondaryemail: 'bsharpe@hotmail.com',
          backgroundinformation: 'We have been childhood friends for a very long time and he ended up working for Pinterest, when it first got going.  He\'s grown along with the company and done very well for himself.  Great guy and has indicated that he\'d be willing to heop me if I needed any help'
        });
      }
    ).then(
      function() {
        Contact.create({
          seedcontactid: 123453,
          seeduserid: 111111,
          contactfirstname: 'Rodrigo',
          contactlastname: 'DeSouza',
          contactcompany: 'Pinterest',
          contactpositiontitle: 'Back End Engineer',
          contactphonenumber: '(333) 333-3333',
          contactemail: 'rodrigo@pinterest.com',
          contactaddress: '3821 Pinterest Place',
          contactcity: 'San Francisco',
          contactstate: 'CA',
          contactzip: 48321,
          secondaryphonenumber: '(444) 444-4444',
          secondaryemail: 'rodrigo@hotmail.com',
          backgroundinformation: null
        });
      }
    ).then(
      function() {
        Contact.create({
          seedcontactid: 123454,
          seeduserid: 111111,
          contactfirstname: 'Betty',
          contactlastname: 'Cragsdale',
          contactcompany: 'NY Sypmphony',
          contactpositiontitle: 'Oboe Player',
          contactphonenumber: '(212) 573-5839',
          contactemail: 'cragsdale'
        });
      }
    ).then(
      function() {
        Contact.create({
          seedcontactid: 123455,
          seeduserid: 111111,
          contactfirstname: 'Hailey',
          contactlastname: 'Rutlidge',
          contactcompany: 'Andrew Walsh Ensemble',
          contactpositiontitle: 'Oboe Player Two'
        });
      }
    ).then(
      function() {
        ActivityLog.create({
          seedactivitylogid: 1,
          seedapplicationid: 444,
          seedcontactid: null,
          activitytype: 'NOTE',
          activitylogcontent: 'saw job and applied'
        });
      }
    ).then(
      function() {
        ActivityLog.create({
          seedactivitylogid: 2,
          seedapplicationid: 444,
          seedcontactid: 123451,
          activitytype: 'NOTE',
          activitylogcontent: 'recruiter called me back and said they were interested in chatting further.  Very cool!'
        });
      }
    ).then(
      function() {
        ActivityLog.create({
          seedactivitylogid: 3,
          seedapplicationid: 444,
          seedcontactid: null,
          activitytype: 'ARTICLE',
          activitylogcontent: 'http://www.adweek.com/digital/pinterest-175-million-monthly-active-users/'
        });
      }
    ).then(
      function() {
        ActivityLog.create({
          seedactivitylogid: 4,
          seedapplicationid: 444,
          seedcontactid: null,
          activitytype: 'ARTICLE',
          activitylogcontent: 'http://www.cnbc.com/2017/04/03/pinterest-ceo-future-of-search.html'
        });
      }
    ).then(
      function() {
        ActivityLog.create({
          seedactivitylogid: 5,
          seedapplicationid: 444,
          seedcontactid: null,
          activitytype: 'NOTE',
          activitylogcontent: 'did some research',
        });
      }
    ).then(
      function() {
        ActivityLog.create({
          seedactivitylogid: 6,
          seedapplicationid: 444,
          seedcontactid: 123451,
          activitytype: 'NOTE',
          activitylogcontent: 'recruiter called back and said they were interested in setting up a phone screen'
        });
      }
    ).then(
      function() {
        ActivityLog.create({
          seedactivitylogid: 7,
          seedapplicationid: 444,
          seedcontactid: 123451,
          activitytype: 'NOTE',
          activitylogcontent: 'had phone screen today she said to prepare on toy problems, especially ones dealing with time complexity'
        });
      }
    ).then(
      function() {
        ActivityLog.create({
          seedactivitylogid: 8,
          seedapplicationid: 444,
          seedcontactid: 123451,
          activitytype: 'NOTE',
          activitylogcontent: 'have not heard anything for a week.  Emailed recruiter'
        });
      }
    ).then(
      function() {
        ActivityLog.create({
          seedactivitylogid: 9,
          seedapplicationid: 444,
          seedcontactid: 123453,
          activitytype: 'NOTE',
          activitylogcontent: 'heard back.  they want to set up an interview!  The interview will be in two weeks.'
        });
      }
    ).then(
      function() {
        ActivityLog.create({
          seedactivitylogid: 10,
          seedapplicationid: 444,
          seedcontactid: null,
          activitytype: 'ARTICLE',
          activitylogcontent: 'http://www.adweek.com/digital/pinterest-app-shortcuts-android/'
        });
      }
    ).then(
      function() {
        ActivityLog.create({
          seedactivitylogid: 11,
          seedapplicationid: 444,
          seedcontactid: 123451,
          activitytype: 'NOTE',
          activitylogcontent: 'recruiter called to set up time for interview prep session'
        });
      }
    ).then(
      function() {
        ActivityLog.create({
          seedactivitylogid: 12,
          seedapplicationid: 444,
          seedcontactid: 123451,
          activitytype: 'NOTE',
          activitylogcontent: 'had prep session with recruiter.  Need to improve the tell me about yourself question'
        });
      }
    ).then(
      function() {
        ActivityLog.create({
          seedactivitylogid: 13,
          seedapplicationid: 444,
          seedcontactid: null,
          activitytype: 'NOTE',
          activitylogcontent: 'had interview.  Ultimately I think it went alright except for the second interviewer who would not stop giving me other toy problems to do.  He gave me like 1000 of them.  He also seemed a bit cranky - maybe he had a bad day.  But everyone else was great, and I got a good vibe from the place.  Certainly hope that they make me an offer'
        });
      }
    ).then(
      function() {
        ActivityLog.create({
          seedactivitylogid: 14,
          seedapplicationid: 444,
          seedcontactid: 123452,
          activitytype: 'NOTE',
          activitylogcontent: 'Brad called today to offer me the position himself.  I am so stoked!  He sent me the details on the position and I put them in'
        });
      }
    ).then(
      function() {
        ContactApplicationJoin.create({
          seedcontactid: 123451,
          seedapplicationid: 444
        });
      }
    ).then(
      function() {
        ContactApplicationJoin.create({
          seedcontactid: 123451,
          seedapplicationid: 222
        });
      }
    ).then(
      function() {
        ContactApplicationJoin.create({
          seedcontactid: 123451,
          seedapplicationid: 333
        });
      }
    ).then(
      function() {
        ContactApplicationJoin.create({
          seedcontactid: 123452,
          seedapplicationid: 444
        });
      }
    ).then(
      function() {
        ContactApplicationJoin.create({
          seedcontactid: 123453,
          seedapplicationid: 444
        });
      }
    ).then(() => {
      res.send('Database seeded successfully!');
    });
  }
};


  // SEQUELIZE MODEL DEFINITIONS









//Add an instance of ContactApplicationJoin

// .then(
//   function() {
//     ContactApplicationJoin.create({
//       seedcontactid: ,
//       seedapplicationid:
//     });
//   }
// )

//Add an instance of Contact

// .then(
//   function() {
//     Contact.create({
//       seedcontactid: ,
//       seeduserid: ,
//       contactfirstname: ,
//       contactlastname: ,
//       contactcompany: ,
//       contactpositiontitle: ,
//       contactphonenumber: ,
//       contactemail: ,
//       contactaddress: ,
//       contactcity: ,
//       contactstate: ,
//       contactzip: ,
//       secondaryphonenumber: ,
//       secondaryemail: ,
//       backgroundinformation:
//     });
//   }
// )

//Add an instance of ActivityLog

// .then(
//   function() {
//     ActivityLog.create({
//       seedactivitylogid: ,
//       seedapplicationid: ,
//       seedcontactid: ,
//       activitytype: ,
//       activitylogcontent:
//     });
//   }
// )

//Add an instance of JobApplication

// .then(
//   function() {
//     JobApplication.create({
//       seedapplicationid: ,
//       seeduserid: ,
//       positionname: ,
//       companyname: ,
//       jobposturl: ,
//       jobarchiveurl: ,
//       status: ,
//       companyaddress: ,
//       companycity: ,
//       companystate: ,
//       companyzip: ,
//       offersalary: ,
//       offeroptions: ,
//       offerbenefits:
//     });
//   }
// )
