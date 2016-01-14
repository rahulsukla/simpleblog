describe('BlogViewController', function () {
  beforeEach(module("blogApp.blogView"));
  beforeEach(inject(function($controller, $rootScope){
    this.scope = $rootScope.$new();
    this.ctrl  = $controller('BlogViewController', {$scope: this.scope });
  }));

  it("blogs is an array", function(){
    expect(Array.isArray(this.scope.blogs)).toBe(true);
  });
});
