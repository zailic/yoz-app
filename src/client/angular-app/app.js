var angular_1 = require("angular");
exports.BaseModule = angular_1.module("App", []);
var base_controller_1 = require("client/angular-app/base-controller");
exports.BaseModule.controller("BaseCtrl", base_controller_1.BaseController);
