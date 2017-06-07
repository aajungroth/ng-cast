angular.module('video-player')
.controller('appCtrl', function () {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = (video) => {
      this.currentVideo = video;
    }
    this.searchResults = () => {
      console.log('hello')
    }
})
.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: 'appCtrl',
});