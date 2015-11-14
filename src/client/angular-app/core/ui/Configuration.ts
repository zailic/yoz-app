import {ExternalLogger} from "../../misc/LogUtils";
export class Configuration {
	public static apply (
		$stateProvider:angular.ui.IStateProvider, 
		$urlRouterProvider:angular.ui.IUrlRouterProvider
	) {	
		let log = new ExternalLogger();
    	log = log.getInstance( "App.Core.UI.Configuration" );
		log.debug("apply()");
    	log.debug( "Configuring 'UI' components" );
	}
}