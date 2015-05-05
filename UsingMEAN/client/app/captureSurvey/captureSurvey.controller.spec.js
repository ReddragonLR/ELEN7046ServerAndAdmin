'use strict';

describe('Controller: CaptureSurveyCtrl', function () {

  // load the controller's module
  beforeEach(module('elen7046ServerAndAdminApp'));

  var CaptureSurveyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CaptureSurveyCtrl = $controller('CaptureSurveyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
