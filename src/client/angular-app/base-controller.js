var BaseController = (function () {
    function BaseController($scope) {
        this.$scope = $scope;
        $scope.helloMsg = "Hello world!";
    }
    BaseController.$inject = ["$scope"];
    return BaseController;
})();
exports.BaseController = BaseController;
