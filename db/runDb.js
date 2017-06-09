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
  pool.query('SELECT * from human where id=$1', [req.params.userid], function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log('email:', result.rows[0].email);
    console.log('first name:', result.rows[0].first_name);
    console.log('last name:', result.rows[0].last_name);
    console.log('time:', result.rows[0].daily_time);
    res.send({
      email: result.rows[0].email,
      first_name: result.rows[0].first_name,
      last_name: result.rows[0].last_name,
      daily_time: result.rows[0].daily_time
    });
  });

}

function createDog(req, res, next) {
  const name = req.body.name;
  const age = req.body.age;
  const weight = req.body.weight;
  const pool = require('./db');
  pool.query('INSERT INTO dog(name, age, weight) VALUES ($1, $2, $3)', [name, age, weight], function(err, res) {
    if(err) {
      return console.error('error running query', err);
    }
  });
  res.send('added dog ' + req.body.name);
}

function getDog(req, res, next) {
  console.log('req.params.dogid= '+ req.params.dogid);
  const pool = require('./db');
  pool.query('SELECT * from dog where id=$1', [req.params.dogid], function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    res.send({
      name: result.rows[0].name,
      age: result.rows[0].age,
      weight: result.rows[0].weight
    });
  });
}

server.post('/signup', createUser);
server.get('/user/:userid', getUser);
server.post('/dog', createDog);
server.get('dog/:dogid', getDog);
;
