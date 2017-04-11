const bcrypt = require('bcryptjs');

const User = require('../models/userModel.js');


// server route handlers
module.exports = {

  // create new user
  onSignup: function (req, res) {
    var {email, password} = req.body;

    if (email) {
      email = email.trim();
    }
    if (password) {
      password = password.trim();
    }

    // if no email or empty password
    if (!email || !password) {
      console.log('Invalid email or password');
      return res.status(422).send({ error: 'You must provide valid email and password'});
    }

    // find email and check if already exists in db
    User.findOne({email})
    .then(user => {
      console.log('-------- user -------- \n', user);

      if (user) {
        console.log('Email already in use!');
        res.status(400).send('Email already in use!');
      } else {

        // create new user, generate token and save to db
        console.log('Creating new user');

        var newUser = new User({ email, password });
        var token = newUser.generateToken();
        newUser.tokens.push({access: 'auth', token});
        console.log('newUser created', newUser);

        newUser.save()
        .then(() => {
          res.header('auth', token).send(newUser);
        })
        .catch(err => {
          console.log('Error1 --->', err);
          res.status(400).send(err.message);
        });
      }



// has been refactored
//       if (user) {
//         console.log('User already exist!');
//         res.status(400).send('User already exist!');
//       } else {
//         console.log('Creating new user');
//         var newUser = new User(req.body);
//
//         newUser.save().then(() => {
//           return newUser.generateToken();
//         }).then(token => {
//           res.header('auth', token).send(newUser);
//         }).catch(err => {
//           console.log('Error --->', err);
//           res.status(400).send(err);
//         });
//       }

    })
  },

  onSignin: function (req, res) {
    var {email, password} = req.body;

    if (email) {
      email = email.trim();
    }
    if (password) {
      password = password.trim();
    }

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
