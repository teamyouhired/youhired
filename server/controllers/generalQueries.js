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


module.exports = {

  getData: function (req, res) {
    // console.log('youre in!');

    // var applicationids = [];

    var data = {
      jobapplications: []
    };

    var applications;

    var getContacts = function(){
      return Contact.findAll({
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

    var loopThroughApplications = function(arr, callback){
        return new Promise(function(resolve, reject){
          arr.forEach(function(item, index){
        //if the counter is equal to info.length then return
          //push the application details into data
          data['jobapplications'].push({
            details: item['dataValues']
          });
          //set the variable for seedapplicationid
          var id = item['dataValues']['seedapplicationid'];
          // console.log(id);
          //run the getActivitiesQuery
          getActivitiesForApplication(id)
          .then(function(result){
            // console.log(data['jobapplications'][index]);
            data['jobapplications'][index]['activities'] = result || [];
            console.log(data['jobapplications'][index]['activities']);
            var lastIndex = applications.length - 1;
            //REVISIT IF WE HAVE ASYNC ISSUES!!
            if(index === lastIndex){
              res.send(data);
            }
          })
          //then, push the result to applicationactivities in data
          //then, run again to counter++
        })
      })
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
          loopThroughApplications(applications)
          // res.send(data);
      })
    }).catch((error) => {
      console.log(error);
    });
  }
};

    // var subroutine = function(info, counter = 0){
    //   //if the counter is equal to info.length then return
    //   if(counter === info.length){
    //     return;
    //   } else {
    //     //push the application details into data
    //     data['jobapplications'].push({
    //       details: info[counter]
    //     });
    //     //set the variable for seedapplicationid
    //     var id = info[counter]['seedApplicationId'];
    //     console.log(id);
    //     //run the getActivitiesQuery
    //     getActivitiesForApplication(id)
    //     .then(function(result){
    //       data['jobapplications'][counter]['activities'] = result.dataValues || [];
    //     })
    //     .then(subroutine(info, counter++));
    //     //then, push the result to applicationactivities in data
    //     //then, run again to counter++
    //   }
    // }









//we can just stick then on to the back
//






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



//PREIVOUS FUNCTION

// Contact.findAll({
//       where: {
//         seeduserid: req.body.seeduserid
//       }
//     }).then(function(results) {
//       data.contacts = results;
//     }).then(function(){

//         JobApplication.findAll({
//         // attributes: ['id'],
//           where: {
//             seeduserid: req.body.seeduserid
//           }
//         }).then(function(results){
//           results.forEach(function(item, index) {
//             return new Promise(function(resolve, reject){

//             data.jobapplications.push({
//               applicationdetails: item.dataValues
//             })
//             // console.log(data.jobapplications[i]);
//             var id = item.dataValues['seedapplicationid'];
//             console.log(id);
//           }).then(function(){
//             //it's as if this is starting AND retrieving BEFORE the 'push' happens above
//             ActivityLog.findAll({
//                 where: {
//                   seedapplicationid: id
//                 }
//                 }).then(function(results){
//                     console.log('youre in! ' + results);
//                     // console.log('Activities: ' + data.jobapplications[index]['activities']);
//                     data.jobapplications[index]['activities']: results || 0;
//                 })
//               })
//             })//loop ends here
//           }).then(function(){  //when the loop is complete, send along the data!
//             res.send(data);;
//                 console.log(data)

//         })
//      }).error(function(err) {
//       console.log('oh no', err);
//     });
//   }


