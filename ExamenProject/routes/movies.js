var express = require('express');
var router = express.Router();
var movieHelper = require('../modules/MoviesHelper');

/* GET movies page. */
router.get('/movies', function(req, res, next) {
	movieHelper.getRandomSearch('movie').then(function(result) {
		res.render('movies', { title: 'Movies random', moviesRandom: result});
	});
});

/* POST movies page */
router.post('/movies/:find', function(req, res, next) {
	movieHelper.search({query:req.params.find, type:'movie'}).then(function(result) {
			res.json(result);
		}, function(error) {
			res.json(error);
	});
});

module.exports = router;