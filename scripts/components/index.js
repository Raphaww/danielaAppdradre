var danielaAppdradre = require('angular').module('danielaAppdradre');

danielaAppdradre.component("trackList",{
templateUrl: 'scripts/components/trackList/trackList.html',
controller: 'trackListController'

}).controller('trackListController',['$scope','$http',function($scope,$http,Tracks){

Tracks.get().then(function(data){
$scope.tracks = data.tracks;

}, function(errors){

console.log(errors);

});


 }]);