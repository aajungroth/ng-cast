angular.module('video-player')
.controller('videoCtrl', function() {
  this.onClick = function() {
    console.log('this')
  }
})
.component('videoList', {
  // TODO
  templateUrl: 'src/templates/videoList.html',
  bindings: {
    videos: '<',
    onClick: '<'
  },
  controller: 'videoCtrl',
});