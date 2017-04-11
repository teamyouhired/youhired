// var bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;
app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));

routes(app);

app.listen(PORT, function() {
  console.log('Your Hired Express server started on port ' + PORT);
});




























































