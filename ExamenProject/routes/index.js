var express = require('express');
var router = express.Router();
var movieHelper = require('../modules/MoviesHelper');

/* GET home page. */
router.get('/', function(req, res, next) {
  movieHelper.search({title:'Guardians of the galaxy'}).then(function(result1) {
	movieHelper.search({title:'Transformers age of extinction'}).then(function(result2) {
		movieHelper.search({title:'Game of thrones'}).then(function(result3) {
			movieHelper.search({title:'Jurassic World'}).then(function(result4) {
				movieHelper.search({title:'The prestige'}).then(function(result5) {
					res.render('index', { title: 'Express', gog: result1, tr4: result2, got: result3, jw: result4, thep: result5});
				});
			});
		});
	});
  });
});

module.exports = router;
