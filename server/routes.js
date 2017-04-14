// const bcrypt = require('bcryptjs');

const authenticate = require('./middleware/authenticate');
const userCtrl = require('./controllers/userCtrl.js');
const seedCtrl = require('./controllers/seedCtrl.js');
const tokenCtrl = require('./controllers/tokenCtrl.js');
const jobApplicationCtrl = ('./controllers/jobApplicationCtrl.js');
const contactCtrl = require('./controllers/contactCtrl.js');
const activityLogCtrl = require('./controllers/activityLogCtrl.js');
const generalQueries = require('./controllers/generalQueries');


// endpoint routes
function Routes(app) {

  app.post('/api/signup', userCtrl.onSignup);
  app.post('/api/signin', userCtrl.onSignin);

  app.post('/api/test', authenticate, userCtrl.test);
  // app.post('/api/test', userCtrl.test);

// POST
  //  /api/user/job
  //  /api/user/activity
  //  /api/user/contact
  //  /api/user/

  // app.post('/api/user/job', userCtrl.onSignin);


  // app.get('/dashboard', authenticate, function (req, res) {
  // // app.get('/dashboard', function (req, res) {
  //   res.send('Welcome!');
  // });

  app.get('/api/seed', seedCtrl.sendSeedData);
  app.post('/api/getData', generalQueries.getData);

  app.get('/api/seedme', seedCtrl.seedDatabase);

  // app.get('*', function (req, res) {
  //   res.send('Please login');
  // });

}

module.exports = Routes;
