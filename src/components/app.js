angular.module('video-player')
.controller('appCtrl', function () {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = function(data) {
      this.currentVideo = data
    }
    this.searchResults = function() {

    }
})
.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: 'appCtrl',
});