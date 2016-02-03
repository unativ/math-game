var express = require('express');
var app = express();
var PORT = 3001;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
});

// POST method route

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var resultObject = {
	question: "50 + 5 from server",
	nowPlaying: true
}

app.post('/answer', function (req, res) {
  //res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.send(JSON.stringify(resultObject));
});

