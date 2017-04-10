// const mongoose = require('mongoose');
// var bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
var Sequelize = require('sequelize');

var connection = new Sequelize('youhired', 'abramicf', 'password', {
  dialect: 'postgres'
});

//db on Heroku:   'postgres://qraqhctfxpyoal:c2768c79581f2001d90e70be012f34f8be5de141bf6eeb8b2f606e845f6700e4@ec2-54-83-48-188.compute-1.amazonaws.com:5432/d2b5jjjej0pc8g'

const PORT = process.env.PORT || 3000;

// mongoose.connect('mongodb://localhost/hired');
// heroku address (postgres://qraqhctfxpyoal:c2768c79581f2001d90e70be012f34f8be5de141bf6eeb8b2f606e845f6700e4@ec2-54-83-48-188.compute-1.amazonaws.com:5432/d2b5jjjej0pc8g)

app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));

routes(app);

app.listen(PORT, function() {
  console.log('Your Hired Express server started on port ' + PORT);
});

//SEQUELIZE STUFF



var User = connection.define('users', {
  // userId: {
  //   type: Sequelize.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true // Automatically gets converted to SERIAL for postgres
  // },
  seedUserId: Sequelize.INTEGER,
  userEmail: {
    type: Sequelize.STRING(100),
    unique: true,
    allowNull: false
  },
  userPassword: {
    type: Sequelize.STRING(255),
    unique: false,
    allowNull: false
  },
  userFirstName: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  userLastName: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
// '},
// {'
  // hooks: {
  //   afterValidate: function (user) {
  //     user.userPassword = bcrypt.hashSync(user.password, 8);
  //   }
  // }
});

var JobApplication = connection.define('jobapplications', {
  seedApplicationId: Sequelize.INTEGER,
  seedUserId: Sequelize.INTEGER,
  positionName: Sequelize.STRING(100),
  companyName: Sequelize.STRING(100),
  jobPostURL: Sequelize.TEXT,
  jobArchiveURL: Sequelize.TEXT,
  status: Sequelize.STRING(50),
  companyAddress: Sequelize.STRING(150),
  companyCity: Sequelize.STRING(150),
  companyState: Sequelize.STRING(2),
  companyZip: Sequelize.STRING(5),
  offerSalary: Sequelize.INTEGER,
  offerOptions: Sequelize.TEXT,
  offerBenefits: Sequelize.TEXT
});

// JobApplication.belongsTo(User, {foreignKey: 'userId'});



//SEED FILE

connection.sync().then(
  function() {
    User.create({
      seedUserId: 111111,
      userEmail: 'samsimple@gmail.com',
      userPassword: '$2a$10$9nAbMiiI.6Sw.VT.NSUgKOtU/yeKupPjSZ5mpAgSGxdEWtzAWcxoO',
      userFirstName: 'Sam',
      userLastName: 'Simple'
    });
  }).then(
  function() {
    User.create({
      seedUserId: 222222,
      userEmail: 'susysimple@gmail.com',
      userPassword: '$2a$10$9nAbMiiI.6Sw.VT.NSUgKOtU/yeKupPjSZ5mpAgSGxdEWtzAWcxo',
      userFirstName: 'Susy',
      userLastName: 'Simple'
    });
  }
).then(
  function() {
    User.create({
      seedUserId: 333333,
      userEmail: 'johndoe@gmail.com',
      userPassword: '$2a$10$9nAbMiiI.6Sw.VT.NSUgKOtU/yeKupPjSZ5mpAgSGxdEWtzAWcxoO',
      userFirstName: 'John',
      userLastName: 'Doe'
    });
  }
).then(
  function() {
    User.create({
      seedUserId: 444444,
      userEmail: 'janedoe@gmail.com',
      userPassword: '$2a$10$9nAbMiiI.6Sw.VT.NSUgKOtU/yeKupPjSZ5mpAgSGxdEWtzAWcxoO',
      userFirstName: 'John',
      userLastName: 'Doe'
    });
  }
).then(
  function() {
    JobApplication.create({
      seedApplicationId: 222,
      seedUserId: 111111,
      positionName: 'Open feedback dialog Principal, Strategy and Business Operations, Google Cloud',
      companyName: 'Google',
      jobPostURL: 'www.google.com',
      jobArchiveURL: 'http://res.cloudinary.com/dlsmih11r/image/upload/v1491607406/Strategic_Account_Specialist_Google_Cloud_Google_LinkedIn_liseeq.pdf',
      status: 'INTERVIEW',
      companyAddress: 'One Great Google Way',
      companyCity: 'Mountain View',
      companyState: 'CA',
      companyZip: 94015,
      offerSalary: null,
      offerOptions: null,
      offerBenefits: null
    });
  }
);








































