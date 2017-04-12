const bcrypt = require('bcryptjs');
var Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');

var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel');


// server route handlers
module.exports = {

  // create new user
  onSignup: function (req, res) {

    var useremail = req.body.useremail;
    var userpassword = req.body.userpassword;

    console.log(useremail + 'and ' + userpassword);

    if (useremail) {
      useremail = useremail.trim();
    }
    if (userpassword) {
      userpassword = userpassword.trim();
    }

    // if no useremail or empty userpassword
    if (!useremail || !userpassword) {
      console.log('Invalid useremail or userpassword');
      return res.status(422).send({ error: 'You must provide valid useremail and userpassword'});
    }

    // encrypt passwords
    bcrypt.hash(userpassword, 10)
    .then(hash => {
      userpassword = hash;
    })
    .catch(err => {
      if (err) {
        console.log('err', err);
      }
    });

    // find useremail and check if already exists in db
    User.findAll({
      where: {
        useremail: useremail
      }
    }).then(user => {
      if (user.length !== 0) {
        console.log('Email already in use!');
        res.status(400).send('Email already in use!');
      } else {
        // create new user, generate token and save to db
        console.log('Creating new user');
        User.create({
          useremail: useremail,
          userpassword: userpassword
        }).then(usr => {
          var token = jwt.sign({useremail: usr.useremail.toString(), access: 'auth'}, 'somesecret');
          return Token.create({
            auth: token,
            userid: usr.dataValues.id
          });
        }).then(token => {
          res.header('auth', token.auth).send(token);
        }).catch(err => {
          console.log('Error1 --->', err);
          res.status(400).send(err.message);
        });
      }
    });
  },


  // Find all projects with a least one task where task.state === project.task
  // Project.findAll({
  //     include: [{
  //         model: Task,
  //         where: { state: Sequelize.col('project.state') }
  //     }]
  // })



  onSignin: function (req, res) {
    var {useremail, userpassword} = req.body;

    if (useremail) {
      useremail = useremail.trim();
    }
    if (userpassword) {
      userpassword = userpassword.trim();
    }

    // check if user exists in db
    User.findOne({useremail: req.body.useremail})
    .then(user => {
      console.log('-------- user -------- \n', user);

      if (!user) {
        console.log('User doesn\'t exist!');
        res.status(400).send('User doesn\'t exist!');

      } else {
        bcrypt.compare(userpassword, user.userpassword, (err, match) => {
          if (match) {
            console.log('userpasswords match');
            res.header('auth', user.tokens[0].token).send(user);
          } else {
            console.log('userpasswords do NOT match');
            res.status(401).send('userpasswords do not match');
          }
        });
      }
    });
  }
};
