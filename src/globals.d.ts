/// <reference path="../typings/angular-material/angular-material.d.ts" />
declare type int = number;

declare module "angular-material" {
	var material:string;
	export default material;
}

declare module "angular-ui-router" {
	var uiRouter:string;
	export default uiRouter;
}

declare interface Tuple < K, V > extends Array< K | V > { 0:K; 1:V; }