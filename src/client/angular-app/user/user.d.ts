interface IUser {
	 name:string;
	 avatar:string;
	 content:string;
}

interface IUserService {
	loadAll: Function
} 

interface IUserSheetItem {
	name:string;
	icon:string;
	iconUrl:string;
}