angular.module('video-player')
.controller('SearchController', function() {
  this.handleClick = () => {
    this.service.search(this.input, (data) => {
      this.result(data);
    });
  };
})
.component('search', {
  // TODO
  templateUrl: 'src/templates/search.html',
  bindings: {
    result: '<',
    service: '<'
  },
  controller: 'SearchController'
});