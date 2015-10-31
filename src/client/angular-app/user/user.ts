import {module} from "angular";
import {UserSheetController} from "./UserSheetController";
import {BrowseUsersController} from "./BrowseUsersController";
import {UserService} from "./UserService";
import {Configuration as UserModuleConfiguration} from "./Configuration";
import {ComponentService} from "../core/component/ComponentService";
import {ComponentRegisterPromise} from "../core/component/ComponentRegisterPromise";

let COMPONENT_FQN="App.User",
	BROWSE_USER_CONTROLLER_FQN = `${COMPONENT_FQN}.BrowseUsersController`,
	USER_SHEET_CONTROLLER_FQN = `${COMPONENT_FQN}.UserSheetController`,
	USER_SERVICE = `${COMPONENT_FQN}.UserService`;
	
export var userComponentPromise = ComponentService.registerComponent(() => {
	module(COMPONENT_FQN, [])
		.service(USER_SERVICE, UserService.Factory)
		.controller(BROWSE_USER_CONTROLLER_FQN, BrowseUsersController)
		.config(UserModuleConfiguration.Factory);	
	return new ComponentRegisterPromise(COMPONENT_FQN);
});