'use strict';

describe('myApp.AddTask module', function() {

    beforeEach(module('myApp.AddTask'));

    describe('ViewAddTaskCtrl controller', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var viewAddTaskCtrl = $controller('ViewAddTaskCtrl');
            expect(viewAddTaskCtrl).toBeDefined();
        }));
    });
});