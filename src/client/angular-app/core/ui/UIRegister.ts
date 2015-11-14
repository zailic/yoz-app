import {module} from "angular";
import {Configuration as CoreModuleConfiguration} from "./Configuration";
import {ComponentService} from "./../component/ComponentService";
import {ComponentRegisterPromise} from "./../component/ComponentRegisterPromise";
import {ToggleMenuDirective} from "./navigation/sidebar/ToggleMenuDirective";
import {LinkMenuDirective} from "./navigation/sidebar/LinkMenuDirective";
import {NoSpaceFilter} from "./navigation/sidebar/NoSpaceFilter";
import {SectionService} from "./navigation/SectionService";
import {NavigationMenuService} from  "./navigation/NavigationMenuService"
import {SidebarDirective} from "./navigation/sidebar/SidebarDirective";

let COMPONENT_FQN="App.Core.UI",
	UI_NAVIGATION_SECTION_SERVICE=`${COMPONENT_FQN}.Navigation.SectionService`,
	UI_NAVIGATION_MENU_SERVICE=`${COMPONENT_FQN}.Navigation.NavigationMenuService`,
	UI_TOGGLE_MENU_DIRECTIVE = "toggleMenu",
	UI_LINK_MENU = "linkMenu",
	UI_SIDEBAR = "sidebar",
	NO_SPACE_FILTER = "nospace";
	
export var uiComponentPromise = ComponentService.registerComponent(() => {
	module(COMPONENT_FQN, [])
		.config(CoreModuleConfiguration.apply)
		.service(UI_NAVIGATION_SECTION_SERVICE, SectionService)	
		.service(UI_NAVIGATION_MENU_SERVICE, NavigationMenuService)	
		.directive(UI_TOGGLE_MENU_DIRECTIVE, ToggleMenuDirective.Factory())
		.directive(UI_LINK_MENU, LinkMenuDirective.Factory())
		.directive(UI_SIDEBAR, SidebarDirective.Factory())
		.filter(NO_SPACE_FILTER, NoSpaceFilter.filter);
	return new ComponentRegisterPromise(COMPONENT_FQN);
});