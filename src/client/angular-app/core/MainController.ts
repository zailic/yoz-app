/// <reference path="../../../../typings/angularjs/angular.d.ts" />

import { IMainScope } from "./IMainScope";

export class MainController {
	
	public static $inject = ["$scope"];
	
	public foo:any;
	
	constructor(public $scope:IMainScope) {
		$scope.helloMsg = "Hello world!";
	}	
}