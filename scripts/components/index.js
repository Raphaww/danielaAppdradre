'use strict';
var danielaAppdrade = require('angular').module('danielaAndradeApp');

danielaAppdrade.component('trackList', {
   templateUrl: 'scripts/components/trackList/trackList.html',
   controller: 'TrackListCtrl'
}).controller('TrackListCtrl', ['$scope', '$http', 'Tracks' , require('./trackList/trackList')]);
