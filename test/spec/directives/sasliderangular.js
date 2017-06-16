'use strict';

describe('Directive: saSliderAngular', function () {

  // load the directive's module
  beforeEach(module('sliderAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sa-slider-angular></sa-slider-angular>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the saSliderAngular directive');
  }));
});
