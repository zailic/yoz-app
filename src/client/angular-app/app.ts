/// <reference path="../../../typings/angularjs/angular.d.ts" />

import {module} from "angular";
export var BaseModule = module("App",[]);
import {BaseController} from "client/angular-app/base-controller";

BaseModule.controller("BaseCtrl", BaseController);