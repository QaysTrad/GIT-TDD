var expect = chai.expect;

describe('app', function() {
  var element, youTubeSpy;

  beforeEach(module('catsList'));
  beforeEach(module('templates'));

  beforeEach(inject(function($rootScope, $compile, youTube) {
    resultSpy = sinon.spy();
    scope = $rootScope.$new();

    // We're stubbing out the youTube search function so it doesn't
    // make an http request
    
    element = angular.element('<catsList data-service="service" data-result="result"></catsList>');
    element = $compile(element)(scope);

    $rootScope.$digest();
  }));

  it('should have a getCats function on the scope', function() {
    expect(element.isolateScope().$ctrl.getCats).to.exist;
    expect(element.isolateScope().$ctrl.getCats).to.be.a('function');
  });

});