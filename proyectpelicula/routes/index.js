var express = require('express');
var router = express.Router();
var movieHelper = require('../modules/MoviesHelper');
var options = {
	query:'Dracula',
	year:2000
}

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', function(req, res, next) {
	
	movieHelper.getRandomSearchMovie().then(function(a){
	movieHelper.search({title:'Big Hero 6'}).then(function(b){
		movieHelper.getRandomSearchSeries().then(function(c){
	  res.render('index', { title: 'Express',movies:a ,movie:b ,series:c});
			});
		});	
	});
});

/* GET review page. */
router.get('/reviews.html', function(req, res, next) {
	
	movieHelper.getRandomSearchMovie().then(function(a){
	movieHelper.search({title:'Big Hero 6'}).then(function(b){
		movieHelper.getRandomSearchSeries().then(function(c){
	  res.render('index', { title: 'Express',movies:a ,movie:b ,series:c});
			});
		});	
	});
});

module.exports = router;