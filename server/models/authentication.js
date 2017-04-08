// var express = require('express');
// var bodyParser = require('body-parser');
// var path = require('path');
var mongoose = require('mongoose');
var User = require('./models/userModel.js');
// var {authenticate} = require('./middleware/authenticate');


// const Authentication.login = function (req, res) {
//   // Generate JWT tokens
//   UserSchema.methods.generateToken = function () {
//     var user = this;
//     var access = 'auth';
//     var token = jwt.sign({_id: user._id.toString(), access}, 'somesecret');
//
//     user.tokens.push({access, token});
//
//     return user.save().then(() => {
//       return token;
//     });
//   };



module.exports = Authentication;
