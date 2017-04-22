const bcrypt = require('bcryptjs');

const authenticate = require('./middleware/authenticate');
const userCtrl = require('./controllers/userCtrl.js');
const seedCtrl = require('./controllers/seedCtrl.js');
const tokenCtrl = require('./controllers/tokenCtrl.js');
const jobApplicationCtrl = require('./controllers/jobApplicationCtrl.js');
const contactCtrl = require('./controllers/contactCtrl.js');
const activityLogCtrl = require('./controllers/activityLogCtrl.js');
const generalQueries = require('./controllers/generalQueries');
const applicationContactCtrl = require('./controllers/applicationContactCtrl.js');
const goalCtrl = require('./controllers/goalCtrl.js');
const updatedSeedCtrl = require('./controllers/updatedSeedCtrl.js');

// endpoint routes
function Routes(app) {


//signup and signin


  app.post('/api/signup', userCtrl.onSignup);
  app.post('/api/signin', userCtrl.onSignin);

//seeding functions and large data pull
  app.get('/api/setuptables', updatedSeedCtrl.setUpTables);
  app.post('/api/updatedSeed', authenticate, updatedSeedCtrl.seed)
  app.post('/api/test', authenticate, userCtrl.test);

  //retreving data
  app.get('/api/getData', authenticate, generalQueries.getData);
  app.get('/api/goalinfo', authenticate, generalQueries.returnGoalInfo);
  // app.get('/api/seedme', seedCtrl.seedDatabase);


//adding new information
  app.post('/api/addapplication', authenticate, jobApplicationCtrl.addApplication);
  app.post('/api/addactivity', authenticate, activityLogCtrl.addActivity);
  app.post('/api/addcontactfromapplication', authenticate, contactCtrl.addContactFromApplication);
  app.post('/api/jobdescription', jobApplicationCtrl.addJobDescription);
  // app.post('/api/addcontactfromdashboard', authenticate, contactCtrl.addContactFromDashboard);

  app.post('/api/addinterview', authenticate, jobApplicationCtrl.addInterview);
  app.post('/api/addjoboffer', authenticate, jobApplicationCtrl.addJobOffer);
  app.post('/api/updatestatus', authenticate, jobApplicationCtrl.updateStatus);
  app.post('/api/addgoal', authenticate, goalCtrl.addNewGoal);

  //testing routes
  app.get('/api/checktimestamp', authenticate, generalQueries.modifyTimeStamp);


  //other routes not currently in use:

  // app.post('/api/associatecontactwithapplication', authenticate, applicationContactCtrl.associateContactWithApplication);
  // app.post('/api/addcontactfromdashboard', authenticate, contactCtrl.addContactFromDashboard);
  // app.get('/api/seed', seedCtrl.sendSeedData);
  // app.post('/api/test', userCtrl.test);
}

module.exports = Routes;
