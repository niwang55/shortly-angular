angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  Links.getAll().then(function(links) {
    console.log('links', links);
    $scope.data.links = links;
  });
});
