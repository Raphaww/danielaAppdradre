'use strict';

var danielaAppdrade = require('angular').module('danielaAndradeApp');

danielaAppdrade.service('Tracks', ['$q','$http', require('./trackListService')]);
