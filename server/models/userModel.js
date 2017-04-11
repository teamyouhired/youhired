var pg = require('pg');
var Sequelize = require('sequelize');
var connection = require('./../db');

var User = connection.define('users', {
      // userId: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: true // Automatically gets converted to SERIAL for postgres
      // },
      seeduserid: Sequelize.INTEGER,
      useremail: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false
      },
      userpassword: {
        type: Sequelize.STRING(255),
        unique: false,
        allowNull: false
      },
      userfirstname: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      userlastname: {
        type: Sequelize.STRING(50),
        allowNull: false
      }
    // '},
    // {'
      // hooks: {
      //   afterValidate: function (user) {
      //     user.userpassword = bcrypt.hashSync(user.password, 8);
      //   }
      // }
    }, {
      timestamps: true,
      createdAt: 'createdat',
      updatedAt: 'updatedat'
    });

module.exports = User;


// const mongoose = require('mongoose');
// const validator = require('validator');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// mongoose.Promise = global.Promise;

// var Schema = mongoose.Schema;

// var UserSchema = new Schema({
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     unique: true,
//     validate: {
//       isAsync: true,
//       validator: validator.isEmail,
//       message: '{VALUE} is not a valid email'
//     }
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   tokens: [{
//     access: {
//       type: String
//     },
//     token: {
//       type: String
//     }
//   }]
// });


// // methods - instance methods

// // Generate JWT tokens
// UserSchema.methods.generateToken = function () {
//   var user = this;
//   // var access = 'auth';
//   var token = jwt.sign({_id: user._id.toString(), access: 'auth'}, 'somesecret');

//   // user.tokens.push({access, token});
//   return token;

//   // return user.save().then(() => {
//   //   return token;
//   // });
// };

// //
// // UserSchema.methods.removeToken = function (token) {
// //   var user = this;
// //
// //   return user.update({
// //     $pull: {
// //       tokens: {token}
// //     }
// //   });
// // };


// // statics - Model methods
// UserSchema.statics.findByToken = function (token) {
//   var User = this;
//   var decoded;

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

// // find user by email and password
// UserSchema.statics.findByCredentials = function (email, password) {
//   var User = this;

//   return User.findOne({email}).then((user) => {
//     if (!user) {
//       console.log('Promise.reject');
//       return Promise.reject();
//     }
//     // because bcrypt didn't support Promises, use generic Promise
//     return new Promise((resolve, reject) => {
//       bcrypt.compare(password, user.password, (err, res) => {
//         if (res) {
//           resolve(user);
//         } else {
//           reject(err);
//         }
//       });
//     });
//   });
// };

// // Mongoose middleware, runs before each 'save'
// UserSchema.pre('save', function (next) {
//   var user = this;

//   if (!user.isModified('password')) {
//     return next();
//   }

//   // bcrypt with Promise
//   // hash user password using 10 saltRounds
//   bcrypt.hash(user.password, 10)
//   .then(hash => {
//     user.password = hash;
//     next();
//   })
//   .catch(err => {
//     if (err) {
//       return next(err);
//     }
//   });

//   // bcrypt with callback
//   // bcrypt.hash(user.password, 10, (err, hash) => {
//   //   if (err) {
//   //     return next(err);
//   //   }
//   //   user.password = hash;
//   //   next();
//   // });
// });

// var User = mongoose.model('User', UserSchema);

// module.exports = User;
