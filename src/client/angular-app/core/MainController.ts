/// <reference path="../../../../typings/angularjs/angular.d.ts" />

import { IMainScope } from "./IMainScope";

export class MainController {

	public static $inject = ["$scope", "$timeout", "$mdSidenav", "App.Core.UI.Navigation.NavigationMenuService"];

	public mainContentArea: Element;

	public autoFocusContent: boolean = false;

	constructor(
		public scope: IMainScope,
		public timeout: angular.ITimeoutService,
		public mdSidenav: angular.material.ISidenavService,
		public navigationMenu: INavigationMenuService
	) {
		this.scope.helloMsg = "Hello world!";
		this.mainContentArea = document.querySelector("[role='main']");
	}

	protected openSectionItem() {
		this.closeNavigationMenu();
		if (this.autoFocusContent) {
			this.focusMainContent();
			this.autoFocusContent = false;
		}
	}

	public isSectionSelected(section) {
		var selected = false;
		var openedSection = this.navigationMenu.openedSection;
		if (openedSection === section) {
			selected = true;
		}
		else if (section.children) {
			section.children.forEach( (childSection:INavigationSection) => {
				if (childSection === openedSection) {
					selected = true;
				}
			});
		}
		return selected;
	}

	public navigationSectionIsOpen(section: INavigationSection) {
		return this.navigationMenu.isSectionSelected(section);
	}

	public closeNavigationMenu() {
		this.timeout(() => this.mdSidenav('left').close());
	}

	public openNavigationMenu() {
		this.timeout(() => this.mdSidenav('left').open());
	}
	
	public toggleSelectedSection(section:INavigationSection) {
		this.navigationMenu.toggleSelectedSection(section);
	}
	
	public focusMainContent($event?: angular.IAngularEvent) {
		// prevent skip link from redirecting
		if ($event) { $event.preventDefault(); }
		this.timeout(() => this.mainContentArea.focus(), 90);
	}
}