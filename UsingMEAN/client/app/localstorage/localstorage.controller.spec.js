'use strict';

describe('Controller: LocalstorageCtrl', function () {

  // load the controller's module
  beforeEach(module('elen7046ServerAndAdminApp'));

  var LocalstorageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LocalstorageCtrl = $controller('LocalstorageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
