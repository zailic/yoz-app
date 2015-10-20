/// <reference path="../../../typings/angularjs/angular.d.ts" />

import { IBaseScope } from "./IBaseScope";
import { IsNaNException } from "../../common/IsNaNException";

export class BaseController {
	
	public static $inject = ["$scope"];
	
	public foo:any;
	
	constructor(public $scope:IBaseScope) {
		$scope.helloMsg = "Hello world!";
		if(isNaN(this.foo)) {
			throw new IsNaNException();
		}
	}	
}