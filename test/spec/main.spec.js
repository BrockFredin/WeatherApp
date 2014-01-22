/**
 * Created by Brock 2013 on 1/15/14.
 */
describe('DataService', function () {
    var $httpBackend, createController, scope;
    beforeEach(function () {
        module('myApp');
        inject(function (DataService, $httpBackend) {
            service = DataService;
            $http = $httpBackend
        });
    });

    it('Gets the right URL', function () {
        expect(service.async('MN', 'Minneapolis')).notNull;
    });

//    it('retains does not change snake-case input', function () {
//        expect(service.camelToSnakeCase('this-is-snake')).toBe('this-is-snake');
//    });
//
//    it('does not add a dash to a work starting with upper case char', function () {
//        expect(service.camelToSnakeCase('Simple')).toBe('simple');
//        expect(service.camelToSnakeCase('Simple')).not.toBe('-simple');
//    });
});