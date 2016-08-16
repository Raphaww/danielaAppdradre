(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var danielaAndradeApp = angular.module('danielaAndradeApp', []);
//agregar popup para video
//agregar html de track como template y con browserify agregarlos al js final
//hacer ejemplo directo con browserify y despues con gulp
//separar css
danielaAndradeApp.controller('TrackListController', function TrackListController($scope) {
   //Traer los track desde un servicio
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
});

},{}]},{},[1]);
