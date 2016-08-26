var express = require('express');
var router = express.Router();
var movieHelper = require('../modules/MoviesHelper');

/* GET series page. */
router.get('/series', function(req, res, next) {
	movieHelper.getRandomSearch('series').then(function(result) {
		res.render('series', { title: 'Movies random', moviesRandom: result});
	});
});

/* POST movies page */
router.post('/series/:find', function(req, res, next) {
	movieHelper.search({query:req.params.find, type:'series'}).then(function(result) {
			res.json(result);
		}, function(error) {
			res.json(error);
	});
});

module.exports = router;