var danielaAppdrade = require('angular').module('danielaAndradeApp');

danielaAppdrade.component("trackList",{
   templateUrl: 'scripts/components/trackList/trackList.html',
   controller:'trackListController'
}).controller('trackListController',['$scope','$http', function($scope, $http){
      $scope.tracks = [
      {
         chapter: 1,
         title: 'Digital Age',
         backgroundClass: 'digitalAge',
         video: 'https://www.youtube.com/embed/eeOeZjK4D98',
         available: true
      },
      {
         chapter: 2,
         title: 'Sound',
         backgroundClass: 'sound',
         video: 'https://www.youtube.com/embed/xqf2DJgucsU',
         available: true
      },
      {
         chapter: 3,
         title: 'Come Around',
         backgroundClass: 'comeAround',
         video: 'https://www.youtube.com/embed/I-fL4KJh_XQ',
         available: true
      },
      {
         chapter: 4,
         title: 'Shore',
         backgroundClass: 'shore',
         video: '',
         available: false
      },
   ];
}]);