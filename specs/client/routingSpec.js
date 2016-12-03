'use strict';

describe('Routing', function () {
  var $route;
  beforeEach(module('shortly'));

  beforeEach(inject(function ($injector) {
    $route = $injector.get('$route');
  }));

  it('Should have /signup route, template, and controller', function () {
    expect($route.routes['/signup']).to.be.defined;
    expect($route.routes['/signup'].controller).to.equal('AuthController');
    expect($route.routes['/signup'].templateUrl).to.equal('app/auth/signup.html');
  });

  it('Should have /signin route, template, and controller', function () {
    expect($route.routes['/signin']).to.be.defined;
    expect($route.routes['/signin'].controller).to.equal('AuthController');
    expect($route.routes['/signin'].templateUrl).to.equal('app/auth/signin.html');
  });

  it('Should have /links route, template, and controller', function () {
    expect($route.routes['/links']).to.be.defined;
    expect($route.routes['/links'].controller).to.equal('LinksController');
    expect($route.routes['/links'].templateUrl).to.equal('app/links/links.html');
  });

  it('Should have /shorten route, template, and controller', function () {
    expect($route.routes['/shorten']).to.be.defined;
    expect($route.routes['/shorten'].controller).to.equal('ShortenController');
    expect($route.routes['/shorten'].templateUrl).to.equal('app/shorten/shorten.html');
  });

  it('Should have /links route, template, and controller', function () {
    expect($route.routes[null]).to.not.be.defined;
    expect($route.routes[null].redirectTo).to.equal('/links');
  });

  it('Should have /logout route, template, and controller', function () {
    expect($route.routes['/logout']).to.be.defined;
    expect($route.routes['/logout'].redirectTo).to.equal('/signin');
  });

  it('Should have authenticate property on all routes', function () {
    expect($route.routes['/signin']).to.be.defined;
    expect($route.routes['/signin'].authenticate).to.equal(false);
    expect($route.routes['/signup']).to.be.defined;
    expect($route.routes['/signup'].authenticate).to.equal(false);
    expect($route.routes['/links']).to.be.defined;
    expect($route.routes['/links'].authenticate).to.equal(true);
    expect($route.routes['/shorten']).to.be.defined;
    expect($route.routes['/shorten'].authenticate).to.equal(true);
    expect($route.routes['/logout']).to.be.defined;
    expect($route.routes['/logout'].authenticate).to.equal(false);
  });
});
