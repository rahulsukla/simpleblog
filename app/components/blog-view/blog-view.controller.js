(function(){
  'use strict';

  angular.module("blogApp.blogView").
  controller("BlogViewController", BlogViewController);

  BlogViewController.$inject = ['$scope'];
  function BlogViewController($scope){
    $scope.blogs = [];
  }
})();
