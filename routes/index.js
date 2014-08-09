var debug = require('debug')('wierzba');
var router = require("express").Router();

var header = require('./headers');
var time = require('./time');
var weather = require('./weather');
var news = require('./news');
var calendar = require('./calendar');

router.get('/', function(req, res) {
  res.render('index', {
    "title": "Wierzba",
    "commands": [
      {"name": "Time", "uri": "/time/:lang"},
      {"name": "Current weather at a defined city", "uri": "/current-weather/:city"},
      {"name": "Next 16 days weather at a defined city", "uri": "/next-weather/:city"},
      {"name": "Personal calendar", "uri": "/calendar"},
      {"name": "News", "uri": "/news"},
    ]
    });
});

router.get('/time', function(req, res) {
  header.setHeaders(res);
  time(res);
});

router.get('/current-weather', function(req, res){
  header.setHeaders(res);
  weather.current(res);
});

router.get('/next-weather', function(req, res){
  header.setHeaders(res);
  weather.next(res);
});

router.get('/news', function(req, res){
  header.setHeaders(res);
  news(res);
});

router.get("/calendar", function(req, res) {
  header.setHeaders(res);
  calendar(res);
});


router.get('/wierzba', function(req, res){
  res.render('wierzba', {});
})

module.exports = router;
