/// <reference path="../../../../typings/angularjs/angular.d.ts" />

import { IScope } from "angular";

export interface IMainScope extends IScope {
	helloMsg:string;
}