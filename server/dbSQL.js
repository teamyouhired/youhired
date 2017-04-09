var Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

var connection = new Sequelize('postgres://qraqhctfxpyoal:c2768c79581f2001d90e70be012f34f8be5de141bf6eeb8b2f606e845f6700e4@ec2-54-83-48-188.compute-1.amazonaws.com:5432/d2b5jjjej0pc8g'
);

var User = connection.define('users', {
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  seedUserId: Sequelize.INTEGER,
  userEmail: {
    type: Sequelize.STRING(100),
    unique: true,
    allowNull: false
  },
  userPassword: {
    type: Sequelize.STRING(255),
    unique: true,
    allowNull: false
  }
  userFirstName: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
  userLastName: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
}, {
  hooks: {
    afterValidate: function (user) {
      user.userPassword = bcrypt.hashSync(user.password, 8)
    }
  }
}
);

var Tokens = connection.define('tokens', {

});

var JobApplication = connection.define('jobApplication', {
  applicationId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  seedApplicationId: Sequelize.INTEGER,
  userId: Sequelize.INTEGER,
  seedUserId: Sequelize.INTEGER,
  positionName: VARCHAR(100),
  companyName VARCHAR(100),
  jobPostURL VARCHAR(1500),
  jobArchiveURL VARCHAR(1500),
  status VARCHAR(50),
  companyAddress VARCHAR(150),
  companyCity VARCHAR(150),
  companyState CHAR(2),
  companyZip CHAR(5),
  offerSalary INT,
  offerOptions VARCHAR(2000),
  offerBenefits VARCHAR(5000),
  applicationCreatedAt TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (userId) REFERENCES users (userId)
})




// sync() creates tables
// connection.sync().then(function () {
//   User.create({
//     username: 'user10',
//     password: 'abc123'
//   });
// })

connection.sync().then(function () {
  // User.findById(3).then(function (user) {
  //   console.log('users ------------------------------', user.dataValues);
  })
  // User.findAll({where: {
  //   username: 'user10'
  // }}).then(function (user) {
  //   console.log('users ------------------------------', user);
  // });

  User.findAll().then(function (users) {
    var userData = users.map(user => {
      return user.dataValues;
    })
    console.log('userData ------------------------------', userData);
  });

});
