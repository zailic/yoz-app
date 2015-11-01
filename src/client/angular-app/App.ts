/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angular-material/angular-material.d.ts" />

import "angular-app-assets/app.css!";
import {module} from "angular";
import material from "angular-material";
import {versionComponentPromise} from "./core/version/version";
import {userComponentPromise} from "./user/UserRegister";
import {MainController} from "./core/MainController";
let APP_NAME="angular-app";
export var App = module(APP_NAME,[material, versionComponentPromise.fqnName, userComponentPromise.fqnName]);
App.controller("MainCtrl", MainController);