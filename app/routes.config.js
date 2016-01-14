(function(){
  angular.module("blogApp").
  config(routesConfig);

  routesConfig.$inject = ['$routeProvider'];
  function routesConfig($routeProvider){
    $routeProvider.
                    when("/", {
                      templateUrl: '/app/components/blog-view/blog-view.tpl.html'
                    })
  }
})()
