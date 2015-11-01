import {IUser} from "./IUser";
import {IUserSheetItem} from "./IUserSheetItem";
/**
* Bottom Sheet controller for the Avatar Actions
*/
export class UserSheetController {
	
	public static $inject=["$mdBottomSheet", "$log"];
	
	public static selectedUser:any;
	
	public sheetItems:IUserSheetItem[];
	
	public user:IUser;
	
	public static availableItems:IUserSheetItem[] = [
		{ name: 'Phone'       , icon: 'phone'       , iconUrl: '/assets/angular-app/svg/phone.svg'},
		{ name: 'Twitter'     , icon: 'twitter'     , iconUrl: '/assets/angular-app/svg/twitter.svg'},
		{ name: 'Google+'     , icon: 'google_plus' , iconUrl: '/assets/angular-app/svg/google_plus.svg'},
		{ name: 'Hangout'     , icon: 'hangouts'    , iconUrl: '/assets/angular-app/svg/hangouts.svg'}
	];
	
	constructor(public $mdBottomSheet:any, public log:any) {
		this.init();
	}
	
	/**
	 * init
	 */
	private init() {
		this.log = this.log.getInstance( "UserSheetController" );
		this.log.debug("instanceOf()");	
		this.sheetItems = UserSheetController.availableItems;
		this.user = UserSheetController.selectedUser;
	}
	
	/**
	 * performAction
	 */
	public performAction(action:string) {
		this.log.debug("makeContactWith( {name} )", action);
		this.$mdBottomSheet.hide(action);
	}	
	
}