describe('hello world directive', function () {

    var helloWorldService, helloWorldDirectiveElm;

    beforeEach(module('starterProject'));
    beforeEach(inject(['$controller', '$rootScope', '$compile', 'helloWorld',
        function ($controller, $rootScope, $compile, helloWorld_) {

            helloWorldService = helloWorld_;
            helloWorldDirectiveElm = $compile('<div hello-world></div>')($rootScope.$new());
            $rootScope.$digest();
        }]));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(helloWorldDirectiveElm.text()).toBe(helloWorldService.getMessage());
    });
});
