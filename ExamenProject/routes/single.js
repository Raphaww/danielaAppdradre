var express = require('express');
var router = express.Router();
var movieHelper = require('../modules/MoviesHelper');

/* GET single page. */
router.get('/single/:id', function(req, res, next) {
	console.log(req.params.id);
	movieHelper.getDetail(String(req.params.id)).then(function(result) {
		movieHelper.search({title:'The originals'}).then(function(result1) {
			movieHelper.search({title:'Toy story'}).then(function(result2) {
				movieHelper.search({title:'The vampire diaries'}).then(function(result3) {
					res.render('single', { title: 'Single movie', singleMovie: result, movie1: result1, movie2: result2, movie3:result3});
				});
			});
		});
	});
});

module.exports = router;