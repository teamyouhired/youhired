// const bcrypt = require('bcryptjs');

const authenticate = require('./middleware/authenticate');
const userCtrl = require('./controllers/userController.js');
const seedCtrl = require('./controllers/seedController.js')

// endpoint routes
function Routes(app) {

  app.post('/api/signup', userCtrl.onSignup);
  app.post('/api/signin', userCtrl.onSignin);


  app.get('/dashboard', authenticate, function (req, res) {
  // app.get('/dashboard', function (req, res) {
    res.send('Welcome!');
  });

  app.get('/api/seed', seedCtrl.sendSeedData);

  app.get('*', function (req, res) {
    res.send('Please login');
  });

}

module.exports = Routes;
