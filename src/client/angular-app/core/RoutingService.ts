export class RoutingService {
	public static $inject=["$stateProvider", "$urlRouterProvider"];
	constructor(
		private stateProvider:angular.ui.IStateProvider, 
		private urlRouterProvider:angular.ui.IUrlRouterProvider
	) {
		
	}	
	public addRoute(name:string, config:angular.ui.IState) {
		this.stateProvider.state(name, config);
		return this;		
	}	
}