
// endpoint routes

function Routes(app) {
  app.post('/login', function (req, res) {

  });

  app.post('/signup', function (req, res) {

  });

  app.get('/', function (req, res) {
    res.send('Welcome /');
  });

  app.get('*', function (req, res) {
    res.send('Please login');
  });

}

module.exports = Routes;
