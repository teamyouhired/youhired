var pg = require('pg');
var Sequelize = require('sequelize');
var fs = require('fs')
var http = require('http')
var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel');
var JobApplication = require('./../models/JobApplicationModel');
var Contact = require('./../models/ContactModel');
var ActivityLog = require('./../models/ActivityLogModel');
var ContactApplicationJoin = require('./../models/ContactApplicationJoinModel');

//Consistency queries exist so that the primary 'id' key can be given the appropriate alias of 'contactid', or 'applicationid' or 'activitylogid' as appropriate.  It eliminates duplicate field names from data going to the front end and provides them with greater clarity for tracking and updating state
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
      'interviewdatetime',
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

var intToTimestamp = function(input){

  var string = input;

  var timestampResult = [];

  var separators = [' ', '\\/', '-'];

  var arr = string.split(new RegExp('[' + separators.join('') + ']', 'g'));

  timestampResult.push(arr[2]);
  timestampResult.push(arr[1]);
  timestampResult.push(arr[0]);

  var result = timestampResult.join('-');

  var final = result + ' ' + arr[3] + ':00 -' + arr[4] + ':00';

  return final;
}

module.exports = {

  addApplication: function(req, res) {
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
      consistencyApplicationQuery(data.dataValues.id)
      .then((info) => {
        res.send(info);
      })
      .then(() => {
        ActivityLog.create({
          applicationid: data.dataValues.id,
          activitytype: 'STATUSCHANGE',
          activitylogcontent: 'INTERESTED'
        })
      })
    })
    .catch((err) => {
      res.status(500).send(err)
    });
  },

  addInterview: function(req, res) {
    JobApplication.update({
      companyaddress: req.body.companyaddress,
      interviewdatetime: intToTimestamp(req.body.interviewdatetime)
    },{
      fields: ['companyaddress', 'interviewdatetime'],
      where: {
        id: req.body.applicationid
      }
    }).then(() => {
      var id = req.body.applicationid;
      consistencyApplicationQuery(id)
      .then((info) => {
        res.send(info);
      })
    }).catch((err) => {
      res.status(500).send(err)
    });
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
      })
    })
    .catch((err) => {
      res.status(500).send(err)
    });
  },

  addJobDescription: function(req, res) {
    const API_KEY = "g8v5kuA8GXNu";

    let jobPostUrl = req.body.jobPostUrl;

    const jobUrlPdf  = "http://pdfmyurl.com/api?license="+ API_KEY + "&url=" + jobPostUrl + " &page_size=A4&orientation=portrait";

    var date = new Date();

    let pdfName = "pdfjobdesc/" + "pdf" + date.getTime() + ".pdf";

    http.get(jobUrlPdf, function(response) {

      var writeStream = fs.createWriteStream('public/'+ pdfName, "utf8");

      var rawData = '';

      response.on ('data', function(chunk) {

        writeStream.write(chunk);
      })

      res.send(pdfName);
    })
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
        // console.log('Status change received!');
        res.send('Status change received!');
      })
    }).catch((err) => {
      res.status(500).send(err)
    });
  }

};