/// <reference path="../../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../../typings/jquery/jquery.d.ts" />
import {IScope} from "angular";
export class VersionDirective {
	public static Factory(version:string){
		return (scope:IScope, elm:any, attrs:any ) => {
			elm.text(version);	
		}
	}
}