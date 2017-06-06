angular.module('video-player')
.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function() {
    this.exampleVideos = window.exampleVideoData;
  }
})
// .controller('appCtrl', function($scope) {
//    $scope.exampleVideos = window.exampleVideoData;
//   // console.log(exampleVideos);
// })