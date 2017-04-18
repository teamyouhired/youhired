// const bcrypt = require('bcryptjs');

const authenticate = require('./middleware/authenticate');
const userCtrl = require('./controllers/userCtrl.js');
const seedCtrl = require('./controllers/seedCtrl.js');
const tokenCtrl = require('./controllers/tokenCtrl.js');
const jobApplicationCtrl = require('./controllers/jobApplicationCtrl.js');
const contactCtrl = require('./controllers/contactCtrl.js');
const activityLogCtrl = require('./controllers/activityLogCtrl.js');
const generalQueries = require('./controllers/generalQueries');

// endpoint routes
function Routes(app) {

  app.post('/api/signup', userCtrl.onSignup);
  app.post('/api/signin', userCtrl.onSignin);

  app.post('/api/test', authenticate, userCtrl.test);
  // app.post('/api/test', userCtrl.test);

  app.get('/api/seed', seedCtrl.sendSeedData);
  app.post('/api/getData', authenticate, generalQueries.getData);

  app.post('/api/addapplication', authenticate, jobApplicationCtrl.addApplication);
  app.post('/api/addactivity', authenticate, activityLogCtrl.addActivity);
  app.post('/api/addcontact', authenticate, contactCtrl.addContactFromUser);

  app.post('/api/addinterview', authenticate, jobApplicationCtrl.addInterview);
  app.post('/api/addjoboffer', authenticate, jobApplicationCtrl.addJobOffer);


  app.get('/api/seedme', seedCtrl.seedDatabase);

  // app.get('*', function (req, res) {
  //   res.send('Please login');
  // });

}

module.exports = Routes;
