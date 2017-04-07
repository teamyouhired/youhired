var express = require('express');
var bodyParser = require('body-parser');

var routes = require('./routes');

var PORT = process.env.PORT || 3000;

app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));

routes(app);


app.listen(PORT, function() {
  console.log('Your Hired Express server started on port ' + PORT);
});
