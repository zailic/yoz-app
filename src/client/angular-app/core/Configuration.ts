import {ExternalLogger, LogDecorator} from "../misc/LogUtils";
export class Configuration {
	public static apply (
		$stateProvider:angular.ui.IStateProvider, 
		$urlRouterProvider:angular.ui.IUrlRouterProvider,
		$provide
	) {	
		let logDecorator = new LogDecorator($provide);
		let log = new ExternalLogger();
    	log = log.getInstance( "App.Core.Configuration" );
		log.debug("apply()");
    	log.debug("Configuring 'core' module" );
		// registering component ui routes
		// For any unmatched url, redirect to /
  		$urlRouterProvider.otherwise("/");
		$stateProvider
			.state('root', {
				controller: "App.Core.MainController",
				url:"",
				abstract:true,
				template: '<div layout="row" flex  ui-view />'
			})
			.state('root.viewport', {
				url: "/",
				templateUrl: '/src/client/angular-app/core/ui/views/viewport.html'	
			});	
		
	}
}