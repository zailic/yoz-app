import {UserSheetController} from "./UserSheetController";

export class BrowseUsersController {
	public static $inject = [ "userService", "$mdSidenav", "$mdBottomSheet", "$log"];
	public selected:any;
	public users=[];
	
	constructor(public userService:any, public $mdSidenav:any, public $mdBottomSheet:any, public $log) {
		
		userService
			.loadAll()
			.then((users) => {
				this.users = [].concat(users);
				this.selected = users[0];
			});	
	}
	
	/**
	 * Hide or Show the 'left' sideNav area
	 */
	public toggleUsersList() {
		this.$log.debug( "toggleUsersList() ");
		this.$mdSidenav('left').toggle();
	}
	  
	/**
	 * Select the current avatars
	 * @param menuId
	 */
	public selectUser ( user ) {
		this.$log.debug( "selectUser( {name} ) ", user);
		this.selected = angular.isNumber(user) ? this.users[user] : user;
		this.toggleUsersList();
	}	  
	
	/**
	 * Show the bottom sheet
	 */
	public share($event) {
		this.$log.debug( "contactUser()");
		var user = this.selected;
		this.$mdBottomSheet
			.show({
				parent: angular.element(document.getElementById('content')),
				templateUrl: '/src/client/angular-app/user/views/contactSheet.html',
				controller: [ '$mdBottomSheet', '$log', user, UserSheetController],
				controllerAs: "vm",
				bindToController : true,
				targetEvent: $event
			}).then((clickedItem) => {
				this.$log.debug( clickedItem.name + ' clicked!');
			});
	}	
	
}