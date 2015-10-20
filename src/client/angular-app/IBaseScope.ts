/// <reference path="../../../typings/angularjs/angular.d.ts" />

import { IScope } from "angular";

export interface IBaseScope extends IScope {
	helloMsg:string;
}