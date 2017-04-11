// var Sequelize = require('sequelize');
// const bcrypt = require('bcrypt');

// var connection = new Sequelize('test', 'root', '');

// var User = connection.define('user', {
//   username: Sequelize.STRING,
//   password: Sequelize.STRING
// }, {
//   hooks: {
//     afterValidate: function (user) {
//       user.password = bcrypt.hashSync(user.password, 8)
//     }
//   }
// }
// );

// // sync() creates tables
// // connection.sync().then(function () {
// //   User.create({
// //     username: 'user10',
// //     password: 'abc123'
// //   });
// // })

// connection.sync().then(function () {
//   // User.findById(3).then(function (user) {
//   //   console.log('users ------------------------------', user.dataValues);
//   })
//   // User.findAll({where: {
//   //   username: 'user10'
//   // }}).then(function (user) {
//   //   console.log('users ------------------------------', user);
//   // });

//   User.findAll().then(function (users) {
//     var userData = users.map(user => {
//       return user.dataValues;
//     })
//     console.log('userData ------------------------------', userData);
//   });

// });
