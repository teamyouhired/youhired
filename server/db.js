var Sequelize = require('sequelize');


//CONNECTION TO LOCAL DATABASE

module.exports = new Sequelize('youhired', 'abramicf', 'password', {
  dialect: 'postgres'
});

// module.exports = new Sequelize('youhired', 'RFreude', 'password', {
//   dialect: 'postgres'
// });

// module.exports = new Sequelize('youhired', 'macuser', 'password', {
//   dialect: 'postgres'
// });


// CONNECTION TO HEROKU DATABASE


var DATABASE_URL = 'postgres://drwwbikbwpcbkq:240efab9e7f65fd7dc4a5d1c9b7d55d9c2d21b5fd4c554aa56bf67ad39d11ad7@ec2-54-204-0-88.compute-1.amazonaws.com:5432/dfsla7gbirdn3k';

module.exports = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: true
  }
});
