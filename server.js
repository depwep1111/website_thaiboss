var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({
  secret:'secret', 
  saveUninitialized: false, 
  resave: false,
  cookie:{maxAge:1296000000}
}));

app.use(function(req, res, next) {
  res.locals.buy = req.session.buy;
  //res.locals.session = req.session;
  next();
});

app.use(express.static(__dirname + '/public'));


var routes =require('./app/routes');

routes(app);

server.listen(port);
console.log('Server is running on '+ port);
exports = module.exports=app;
