import {module} from "angular";
import {MainController} from "./MainController";
import {RoutingService} from "./RoutingService";
import {Configuration as CoreModuleConfiguration} from "./Configuration";
import {ComponentService} from "./component/ComponentService";
import {ComponentRegisterPromise} from "./component/ComponentRegisterPromise";
import {uiComponentPromise} from "./ui/UIRegister"
import {versionComponentPromise} from "./version/VersionRegister";
import * as lodash from "lodash";

let COMPONENT_FQN="App.Core",
	MAIN_CORE_CONTROLLER_FQN = `${COMPONENT_FQN}.MainController`,
	ROUTING_SERVICE= `${COMPONENT_FQN}.RoutingService`,
	LODASH = "lodash";
	
export var coreComponentPromise = ComponentService.registerComponent(() => {
	module(COMPONENT_FQN, [versionComponentPromise.fqnName, uiComponentPromise.fqnName])
		.controller(MAIN_CORE_CONTROLLER_FQN, MainController)
		.service(ROUTING_SERVICE, RoutingService)
		.config(CoreModuleConfiguration.apply)
		.value(LODASH, lodash);	
	return new ComponentRegisterPromise(COMPONENT_FQN);
});