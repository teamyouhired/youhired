const bcrypt = require('bcryptjs');
var Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
var connection = require('./../db');
var User = require('./../models/UserModel');
var Token = require('./../models/TokenModel');
var Goal = require('./../models/GoalModel');

module.exports = {

  test: function (req, res) {

    console.log('res user', res.userid);

    console.log('res token', res.token);

    var id = res.userid;

    console.log('id -------- ',id);

    res.send(res.token);
  },
  // create new user
  onSignup: function (req, res) {

    var {useremail, userpassword} = req.body;

    console.log(useremail + 'and ' + userpassword);

    if (useremail) {
      useremail = useremail.trim().toLowerCase();
    }
    if (userpassword) {
      userpassword = userpassword.trim();
    }
    // if no useremail or empty userpassword
    if (!useremail || !userpassword) {
      console.log('Invalid useremail or userpassword');
      return res.status(422).send({ error: 'You must provide valid useremail and userpassword'});
    }
    // hash passwords
    User.hash(userpassword).then(hash => {
      userpassword = hash;
      console.log('hash', hash);
    })
    // find useremail and check if already exists in db
    User.findAll({
      where: {
        useremail: useremail
      }
    })
    .then(user => {
      if (user.length !== 0) {
        console.log('Email already in use!');
        res.status(400).send('Email already in use!');
    } else {
      // create new user, generate token and save to db
      console.log('Creating new user');
      User.create({
        useremail: useremail,
        userpassword: userpassword
      })
      .then(usr => {
        var userid = usr.dataValues.id;
        var auth = User.generateToken(userid)

        Token.create({auth, userid})
          .then(token => {
            res.header('auth', token.auth).send({user: user, token: token.auth});
          })
          .then(() => {
            Goal.create({
              userid: userid,
              numberofstatus: 0,
              goaltype: 'INTERESTED',
              goalduedate: '2017-12-31T12:00:00.166Z'
            })
          }).then(() => {
            Goal.create({
              userid: userid,
              numberofstatus: 0,
              goaltype: 'APPLIED',
              goalduedate: '2017-12-31T12:00:00.166Z'
            })
          }).then(() => {
            Goal.create({
              userid: userid,
              numberofstatus: 0,
              goaltype: 'INFO INTERVIEW',
              goalduedate: '2017-12-31T00:12:00.166Z'
            })
          }).then(() => {
            Goal.create({
              userid: userid,
              numberofstatus: 0,
              goaltype: 'INTERVIEW',
              goalduedate: '2017-12-31T12:00:00.166Z'
            })
          })
          .catch(err => {
            console.log('Error1 --->', err);
            res.status(400).send(err.message);
          });
        });
      }
    });
  },

  onSignin: function (req, res) {
    var {useremail, userpassword} = req.body;
    console.log('email -', useremail, userpassword);

    if (useremail) {
      useremail = useremail.trim().toLowerCase();
    }
    if (userpassword) {
      userpassword = userpassword.trim();
    }
    // if no useremail or empty userpassword
    if (!useremail || !userpassword) {
      console.log('Invalid email or password');
      return res.status(422).send({ error: 'You must provide valid email and password'});
    }
    // check if user exists in db
    User.findOne({
      where: {
        useremail: useremail
      }
    })
    .then(user => {
      // console.log('-------- user -------- \n', user);
      if (!user) {
        console.log('User doesn\'t exist!');
        return res.status(400).send('User doesn\'t exist!');
      }
      bcrypt.compare(userpassword, user.userpassword)
      .then(match => {
        if (!match) {
          console.log('passwords do NOT match');
          res.status(401).send('passwords do not match');
        } else {
          console.log('passwords match', '\n\n');
          var userid = user.id;
          var auth = User.generateToken(userid)

          Token.create({auth, userid})
            .then(token => {
              res.header('auth', token.auth).send({user: user, token: token.auth});
            })
            .catch(err => {
              console.log('Error1 --->', err);
              res.status(400).send(err.message);
            });
        }
      })
      .catch(err => {
        console.log('Error has occured', err);
        res.status(401).send('Error has occured!');
      })
    });
  }
};
