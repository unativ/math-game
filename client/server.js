var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var bodyParser = require('body-parser')
var port = 8000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
//app.use(new (require('body-parse'))());
app.use(bodyParser.json()); 

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})


app.post('/check_answer', function (req, res) {
  var resultObject = {
    question: "50 + 5 from server",
    correctAnswer: (req.body.answer == 42)
  }
  //res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  console.log("server:", req.body.answer);
  res.send(JSON.stringify(resultObject));
});
