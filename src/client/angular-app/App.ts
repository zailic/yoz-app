/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angular-material/angular-material.d.ts" />

import 'angular-material/angular-material.css!';
import {module} from "angular";
import material from "angular-material";
import {versionComponentPromise} from "./core/version/version";
import {userComponentPromise} from "./user/user";
import {MainController} from "./core/MainController";
export var App = module("App",[versionComponentPromise.fqnName, userComponentPromise.fqnName]);
console.log(material);
App.controller("MainCtrl", MainController);