import {module} from "angular";
import {UserSheetController} from "./UserSheetController";
import {BrowseUsersController} from "./BrowseUsersController";
import {UserServiceFactory} from "./UserServiceFactory";
import {Configuration as UserModuleConfiguration} from "./Configuration";
import {ComponentService} from "../core/component/ComponentService";
import {ComponentRegisterPromise} from "../core/component/ComponentRegisterPromise";

let COMPONENT_FQN="App.User",
	BROWSE_USER_CONTROLLER_FQN = `${COMPONENT_FQN}.BrowseUsersController`,
	USER_SHEET_CONTROLLER_FQN = `${COMPONENT_FQN}.UserSheetController`,
	USER_SERVICE_FACTORY = `${COMPONENT_FQN}.UserService`;
	
export var userComponentPromise = ComponentService.registerComponent(() => {
	module(COMPONENT_FQN, [])
		.service(USER_SERVICE_FACTORY, UserServiceFactory.create)
		.controller(BROWSE_USER_CONTROLLER_FQN, BrowseUsersController)
		.config(UserModuleConfiguration.apply);	
	return new ComponentRegisterPromise(COMPONENT_FQN);
});