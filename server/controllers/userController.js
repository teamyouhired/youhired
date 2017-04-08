const bcrypt = require('bcryptjs');

var User = require('../models/userModel.js');

// server route handlers
module.exports = {

  // create new user
  onSignup: function (req, res) {
    var {email, password} = req.body;
    console.log('email', email);
    console.log('password', password);

    // check if user already exists in db
    User.findOne({email: req.body.email})
    .then(user => {
      console.log('-------- user -------- \n', user);

      if (user) {
        console.log('User already exist!');
        res.status(400).send('User already exist!');
      } else {
        console.log('Creating new user');
        var newUser = new User(req.body);

        newUser.save().then(() => {
          return newUser.generateToken();
        }).then(token => {
          res.header('auth', token).send(newUser);
        }).catch(err => {
          res.status(400).send(err);
        });
      }
    });
  },

  onSignin: function (req, res) {
    var {email, password} = req.body;
    console.log('email', email);
    console.log('password', password);

    // check if user exists in db
    User.findOne({email: req.body.email})
    .then(user => {
      console.log('-------- user -------- \n', user);

      if (!user) {
        console.log('User doesn\'t exist!');
        res.status(400).send('User doesn\'t exist!');

      } else {
        bcrypt.compare(password, user.password, (err, match) => {
          if (match) {
            console.log('Passwords match');
            res.header('auth', user.tokens[0].token).send(user);
          } else {
            console.log('Passwords do NOT match');
            res.status(401).send('Passwords do not match');
          }
        });
      }
    });
  }
};
