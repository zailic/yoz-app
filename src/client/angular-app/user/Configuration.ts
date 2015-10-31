import {ExternalLogger} from "../misc/LogDecorator";
export class Configuration {
	public static URL_AVATAR_ICONS:string = '/assets/angular-app/svg/avatars.svg';
	public static URL_ICON_MENU:string = '/assets/angular-app/svg/menu.svg'; 
	public static URL_ICON_SHARE:string = '/assets/angular-app/svg/share.svg'; 

	public static Factory ($mdIconProvider) {
		let $log = new ExternalLogger();
    	$log = $log.getInstance( "BOOTSTRAP" );
    	$log.debug( "Configuring 'user' module" );
		$log.debug( "Configuring $mdIconProvider" );	
		// Register `dashboard` iconset & icons for $mdIcon service lookups
		$mdIconProvider
			.defaultIconSet(Configuration.URL_AVATAR_ICONS, 128 )
			.icon('menu', Configuration.URL_ICON_MENU, 24)
			.icon('share', Configuration.URL_ICON_SHARE, 24);	
		
	}
}