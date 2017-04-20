// var bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');

const routes = require('./routes');
const seedCtrl = require('./controllers/seedCtrl.js')


const PORT = process.env.PORT || 3000;
app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));

routes(app);

//SEED DATABASE
// just make a GET request to /api/seedme
// it will drop all tables and recreate data

app.listen(PORT, function() {
  console.log('Your Hired Express server started on port ' + PORT);
});
