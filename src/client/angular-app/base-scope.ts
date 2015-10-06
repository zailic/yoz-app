/// <reference path="../../../typings/angularjs/angular.d.ts" />

import { IScope } from "angular";

export class BaseController {
	
	public static $inject = ["$scope"];
	
	
	constructor(public $scope:IScope) {
		$scope.helloMsg = "Hello world!";
	}	
}