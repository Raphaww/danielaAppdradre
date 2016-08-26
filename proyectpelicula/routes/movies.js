var express = require('express');
var router = express.Router();
var movieHelper = require('../modules/MoviesHelper');


/* GET review page. */
router.get('/movies', function(req, res, next) {
  movieHelper.getRandomSearch().then(function(d){
  res.render('movies', { title: 'Express',reviews:d });
	});
});

module.exports = router;