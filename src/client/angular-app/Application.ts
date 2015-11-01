/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angular-material/angular-material.d.ts" />

import {module,element} from "angular";
import {MainController} from "./core/MainController";
import { LogDecorator, ExternalLogger } from './misc/LogUtils';

export { Application };

class Application {
	
	protected ngApp:angular.IModule;
	
	protected log:IEnhancedLogger;
	
	/**
	 *  Constructor
	 *  @param string name Application name
	 *  @param dependencyQueue string[] Application dependency list
	 */
	constructor(protected name:string, protected dependencyQueue:any=[]) {
		this.log = new ExternalLogger();
		this.log = this.log.getInstance("Application");
		this.log.debug("instanceof()");		
	}
	
	/**
	 *  Add an application module dependency
	 */
	public requires(dependencyName:string) {
		if(this.dependencyQueue.indexOf(dependencyName) == -1) {
			this.dependencyQueue.push(dependencyName);		
		}
		return this;	
	}
	
	/**
	 *  Runs the application
	 */
	public run():void {
		element(document).ready( () => {
			this.log.debug("Bootstraping '{0}'", [this.name]); 
			this.ngApp = module(this.name, this.dependencyQueue);
			this.ngApp.controller("MainCtrl", MainController);
			this.ngApp.config(["$provide", LogDecorator]);
			angular.bootstrap(document, [this.name], {strictDi: false});	
		});	
	}
}