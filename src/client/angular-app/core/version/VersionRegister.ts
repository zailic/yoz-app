import {module} from "angular";
import {InterpolateFilter} from "./InterpolateFilter";
import {VersionDirective} from "./VersionDirective";
import {ComponentService} from "../component/ComponentService";
import {ComponentRegisterPromise} from "../component/ComponentRegisterPromise";
var COMPONENT_FQN="App.Core.Version",
	INTERPOLATE_FILTER_FQN=`${COMPONENT_FQN}.InterpolateFilter`,
	VERSION_DIRECTIVE_FQN=`${COMPONENT_FQN}.VersionDirective`;
	
export var versionComponentPromise = ComponentService.registerComponent(() => {
	module(INTERPOLATE_FILTER_FQN,[]).filter('interpolate', ['version', InterpolateFilter.Factory]);
	module(VERSION_DIRECTIVE_FQN,[]).directive('appVersion', ['version', VersionDirective.Factory]);
	module(COMPONENT_FQN, [INTERPOLATE_FILTER_FQN, VERSION_DIRECTIVE_FQN]).value('version', '0.1');	
	return new ComponentRegisterPromise(COMPONENT_FQN);
});
