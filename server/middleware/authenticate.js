const jwt = require('jsonwebtoken');

var User = require('./../models/userModel.js');

var authenticate = function (req, res, next) {
  var decoded;
  var token = req.header('auth');
  // console.log('token', token);
  try {
    decoded = jwt.verify(token, 'somesecret');
    console.log('decoded', decoded);
  } catch (err) {
    console.log('Rejjjject');
    return Promise.reject(err);
  }

  // find user by id and token
  User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  })
  .then(user => {
    console.log('user', user);
    if (!user) {
      return Promise.reject();
    }
    req.user = user;
    req.token = token;
    next();
  }).catch(err => {
    console.log('err', err);
    res.status(401).send(err);
  })

};

module.exports = authenticate;

//
// var User = require('./../models/userModel');
//
// // get JWT token to be sent with every private request to the server
// var authenticate = (req, res, next) => {
//   var token = req.header('x-auth');
//
//   User.findByToken(token).then((user) => {
//     console.log('user', user);
//     if (!user) {
//       return Promise.reject();
//     }
//
//     req.user = user;
//     req.token = token;
//     next();
//   }).catch((err) => {
//     console.log('err', err);
//     res.status(401).send(err);
//   });
// };
//
// module.exports = {authenticate};
//
//
// UserSchema.statics.findByToken = function (token) {
//   var User = this;
//   var decoded;
//
//   try {
//     decoded = jwt.verify(token, 'somesecret');
//   } catch (err) {
//     return Promise.reject(err);
//   }
//   // find user by id and token
//   return User.findOne({
//     '_id': decoded._id,
//     'tokens.token': token,
//     'tokens.access': 'auth'
//   });
// };
