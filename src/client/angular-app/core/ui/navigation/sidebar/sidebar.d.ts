declare interface IToggleMenuScope extends angular.IScope {
	section:string;
	isOpen?: Function;
	toggle?: Function;
}

declare interface ILinkMenuScope extends angular.IScope {
	section:string;
	isSelected: Function;
	focusSection: Function;
}

declare interface ISidebarScope extends angular.IScope {
	sections:INavigationSection[];
}