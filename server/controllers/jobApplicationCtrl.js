var pg = require('pg');
var Sequelize = require('sequelize');
var $ = require('jquery');
var fs = require('fs')
var http = require('http')
var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel');
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ActivityLog = require('./../models/ActivityLogModel');
var ContactApplicationJoin = require('./../models/ContactApplicationJoinModel');

//CREATE A NEW JOB APPLICATION

var consistencyApplicationQuery = function(id){
      return JobApplication.findOne({
        attributes: [
          ['id', 'applicationid'],
          'positionname',
          'companyname',
          'jobposturl',
          'jobfile',
          'status',
          'companyaddress',
          'companycity',
          'companystate',
          'companyzip',
          'offersalary',
          'offeroptions',
          'offerbenefits',
          'userid',
          [Sequelize.fn('TO_CHAR', Sequelize.col('createdat'), 'MON YYYY'), 'createdat']
          ],
        where: {
            id: id
          }
      });
    }

module.exports = {

  addApplication: function(req, res) {

    console.log('req.body.userid --- ',req.body.userid);

    console.log('add functionality that sends jobPostUrl to site and returns archive URL.  Data received back should be an argument to next function in the chain');
//
    JobApplication.create({
      userid: req.body.userid,
      status: 'INTERESTED',
      jobfile: req.body.jobfile,
      positionname: req.body.positionname,
      companyname: req.body.companyname,
      jobposturl: req.body.jobposturl,
      jobfile: req.body.jobfile
    })
    .then((data) => {
      consistencyApplicationQuery(data.dataValues.id).then((info) => {
        res.send(info);
        console.log(info);
      }).then(() => {
        ActivityLog.create({
          applicationid: data.dataValues.id,
          activitytype: 'STATUSCHANGE',
          activitylogcontent: 'INTERESTED'
        })
      })
    })
    .catch('error!');
  },

  // retrieveArchivedUrl: function(req, res) {

  // },


  // retrieveArchivedUrl: function(req, res) {
  //   return blah;
  // },

  addInterview: function(req, res) {
    console.log(req.body.applicationid);
    JobApplication.update({
      companyaddress: req.body.companyaddress,
      companycity: req.body.companycity,
      companystate: req.body.companystate,
      companyzip: req.body.companyzip
    },{
      fields: ['companyaddress', 'companycity', 'companystate', 'companyzip'],
      where: {
        id: req.body.applicationid
      }
    }).then(() => {
      var id = req.body.applicationid;
      consistencyApplicationQuery(id).then((info) => {
        res.send(info);
        console.log(info);
      })
    }).catch('error!');
  },



  addJobOffer: function(req, res) {
   JobApplication.update({
      offersalary: req.body.offersalary,
      offeroptions: req.body.offeroptions,
      offerbenefits: req.body.offerbenefits
    },{
      fields: ['offersalary', 'offeroptions', 'offerbenefits'],
      where: {
        id: req.body.applicationid
      }
    }).then(() => {
      var id = req.body.applicationid;
      consistencyApplicationQuery(id).then((info) => {
        res.send(info);
        console.log(info);
      })
    }).catch('error!');
  },


   addJobDescription: function(req, res) {
    const API_KEY = "g8v5kuA8GXNu";
    const jobUrlPdf  = "http://pdfmyurl.com/api?license="+ API_KEY + "&url=" + "http://www.example.com" + " &page_size=A4&orientation=portrait";

    http.get(jobUrlPdf, function(res) {
      console.log(res)
      var writeStream = fs.createWriteStream('public/pdfjobdesc/'+ someVar +'.pdf', "utf8");
      var rawData = '';
      res.on ('data', function(chunk) {
        //rawData += chunk;
        writeStream.write(chunk);
      })
      res.on('end', function () {
        console.log('Done!')
      })
    })



        // fs.writeFile('tempName.pdf', file, function(err) {
        //   return console.log(err);
        // })
        //let sfile = JSON.stringify(file)
        // this.props.addJob({
        //   companyname: companyName,
        //   positionname:  positionName,
        //   jobfile: sfile,
        //   jobposturl: jobPostUrl,
        //   status: status
        // });
      //});

  },






  updateStatus: function(req, res) {
    JobApplication.update({
      status: req.body.status,
    },{
      fields: ['status'],
      where: {
        id: req.body.applicationid
      }
    }).then(() => {
      ActivityLog.create({
        applicationid: req.body.applicationid,
        activitytype: 'STATUSCHANGE',
        activitylogcontent: req.body.status
      })
      .then(function(info){
        console.log('Status change received!');
        res.send('Status change received!');
      })
    }).catch('error!');
  }


};


// fetch(jobUrlPdf)
//       .then(file => {
//         fs.writeFile('tempName.pdf', file, function(err) {
//           return console.log(err);
//         })
//         //let sfile = JSON.stringify(file)
//         // this.props.addJob({
//         //   companyname: companyName,
//         //   positionname:  positionName,
//         //   jobfile: sfile,
//         //   jobposturl: jobPostUrl,
//         //   status: status
//         // });
//       });

//   },