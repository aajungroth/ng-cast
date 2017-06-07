angular.module('video-player')

.component('videoPlayer', {
  // TODO
  templateUrl: 'src/templates/videoPlayer.html',
  bindings: {
    video: '<'
  },
  controller: function() {
    this.url = function( ) {
      if (this.video) {
        this.link = 'https://www.youtube.com/embed/' + this.video.id.videoId;
        return this.link;
      } else {
        this.link = '';
        // console.log(this);
        return this.link;
      }
    };
  },

});
