import {ExternalLogger} from "../misc/LogUtils";
export class Configuration {
	public static URL_AVATAR_ICONS:string = '/assets/angular-app/svg/avatars.svg';
	public static URL_ICON_MENU:string = '/assets/angular-app/svg/menu.svg'; 
	public static URL_ICON_SHARE:string = '/assets/angular-app/svg/share.svg'; 

	public static apply (
		$mdIconProvider:angular.material.IIconProvider, 
		$stateProvider:angular.ui.IStateProvider, 
		$urlRouterProvider:angular.ui.IUrlRouterProvider
	) {
		let log = new ExternalLogger();
    	log = log.getInstance( "App.User.Configuration" );
    	log.debug( "apply()" );
    	log.debug( "Configuring 'user' module" );
		
		log.debug( "Configuring $mdIconProvider" );	
		// Register `dashboard` iconset & icons for $mdIcon service lookups
		$mdIconProvider
			.defaultIconSet(Configuration.URL_AVATAR_ICONS, 128 )
			.icon('menu', Configuration.URL_ICON_MENU, 24)
			.icon('share', Configuration.URL_ICON_SHARE, 24);	
		// registering component ui routes
		$stateProvider
			.state('user', {
				url: '/user',
				templateUrl: '/src/client/angular-app/user/views/browseUsers.html'		
			})	
		
	}
}