'use strict';

module.exports = function ($scope, $http, Tracks){
   Tracks.get().then(function(data){
      $scope.tracks = data.tracks;
   });
};
