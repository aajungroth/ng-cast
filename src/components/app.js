angular.module('video-player')
.controller('appCtrl', function (youTube) {
  this.videos = window.exampleVideoData;
  this.currentVideo = this.videos[0];
  // this.query = "spotify";
  this.searchService = youTube;
  this.selectVideo = (video) => {
    this.currentVideo = video;
  };
  this.searchResults = (data) => {
    // console.log('hello')
    this.videos = data;
    this.currentVideo = this.videos[0];
  };
  youTube.search('cats', this.searchResults);
})
.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: 'appCtrl',
});