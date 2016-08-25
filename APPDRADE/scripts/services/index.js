var danielaAppdrade= require('angular').module('danielaAndradeApp');

danielaAppdrade.service('Tracks', ['$q', '$http', function($q, $http)
{
	var $defered= $q.defer();
	
	return $defered.promise();
}]);