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
