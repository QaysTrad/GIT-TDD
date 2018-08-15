var expect = chai.expect;

describe('app', function() {
  var element, youTubeSpy;

  beforeEach(module('catsList'));

  beforeEach(module('templates'));

  beforeEach(inject(function($rootScope, $compile, youTube) {
    var scope = $rootScope.$new();

    // We're stubbing out the youTube search function so it doesn't
    // make an http request
    element = angular.element('<app></app>');
    element = $compile(element)(scope);

    $rootScope.$digest();
  }));
});