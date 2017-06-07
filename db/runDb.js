var restify = require('restify');
var server = restify.createServer();

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

server.use(restify.bodyParser({mapParams: false}));

function createUser(req, res, next) {
  const email = req.body.email;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const time = req.body.time;
  const pool = require('./db');

  pool.query('INSERT INTO human(email, first_name, last_name, daily_time) VALUES ($1, $2, $3, $4)', [email, first_name, last_name, time], function(err, res) {
    if(err) {
      return console.error('error running query', err);
    }
  });
    res.send('added user ' + req.body.email);
  }

function getUser(req, res, next) {
  console.log('email= '+req.body.email);
  const pool = require('./db');

  pool.query('SELECT * from human', function(err, res) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log('name:', res.rows[0].name);
  });
    res.send('retrieved user ' + req.body.name);
  }

server.post('/signup', createUser);
// server.get('/user/:name', getUser);
;
