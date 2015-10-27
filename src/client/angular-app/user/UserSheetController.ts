/**
* Bottom Sheet controller for the Avatar Actions
*/
export class UserSheetController {
	
	public static $inject=["$mdBottomSheet", "$log"];
	
	public static items = [
		{ name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
		{ name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
		{ name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
		{ name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
	];
	
	constructor(public $mdBottomSheet:any, public $log:any) {
		this.init();
	}
	
	/**
	 * init
	 */
	private init() {
		this.$log = this.$log.getInstance( "UserSheetController" );
		this.$log.debug( "instanceOf() ");	
	}
	
	/**
	 * performAction
	 */
	public performAction(action:string) {
		this.$log.debug("makeContactWith( {name} )", action);
		this.$mdBottomSheet.hide(action);
	}	
	
}