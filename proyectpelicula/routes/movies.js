var express = require('express');
var router = express.Router();
var movieHelper = require('../modules/MoviesHelper');


/* GET review page. */
router.get('/movies', function(req, res, next) {
  movieHelper.getRandomSearch().then(function(d){
  res.render('movies', { title: 'Express',reviews:d });
	});
});

router.post('/movies/:title', function(req, res) {
	movieHelper.search({query:req.params.title}).then(function(a){
		console.log(a)
		res.json(a);
	}, function(error){
	res.json(error);
	});
});

module.exports = router;