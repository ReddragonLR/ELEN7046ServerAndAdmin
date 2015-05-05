'use strict';

describe('Controller: SurveyAdminCtrl', function () {

  // load the controller's module
  beforeEach(module('elen7046ServerAndAdminApp'));

  var SurveyAdminCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SurveyAdminCtrl = $controller('SurveyAdminCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
