'use strict';

let express = require('express');
var bodyParser = require('body-parser')
let app = express();
let PORT = 3001;
app.use(bodyParser.json()); 

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


app.post('/check_answer', function (req, res) {
  var resultObject = {
    question: "50 + 5 from server",
    correctAnswer: (req.body.answer == 42)
  }
  //res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  console.log("server:", req.body.answer);
  res.send(JSON.stringify(resultObject));
});

