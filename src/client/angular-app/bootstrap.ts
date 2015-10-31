import {element} from "angular";
import { App } from './App';
import { LogDecorator, ExternalLogger } from './misc/LogDecorator';

element(document).ready(initApp);

function initApp() {
	let $log = new ExternalLogger();
	$log = $log.getInstance("BOOTSTRAP");
	$log.debug("Initializing '{0}'", [App.name]); 
	let body = document.getElementsByTagName("body")[0];
	App.config(["$provide", LogDecorator]);
	angular.bootstrap(body, [App.name], {strictDi: false});
}