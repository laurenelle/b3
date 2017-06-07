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
  console.log('req.params.userid= '+ req.params.userid);
  const pool = require('./db');
  pool.query('SELECT * from human where id=$1', [req.params.userid], function(err, res) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log('email:', res.rows[0].email);
    console.log('first name:', res.rows[0].first_name);
    console.log('last name:', res.rows[0].last_name);
    console.log('time:', res.rows[0].daily_time);
  });
    res.send('retrieved user ' + res.rows[0].email);
  }

server.post('/signup', createUser);
server.get('/user/:userid', getUser);
;
