import "angular-app-assets/app.css!";
import material from "angular-material";
import uiRouter from "angular-ui-router";
import { Application } from './Application';
import {coreComponentPromise} from "./core/CoreRegister";
import {userComponentPromise} from "./user/UserRegister";
let APP_NAME="angular-app";
let app = new Application(APP_NAME);
app
	.requires(uiRouter)
	.requires(material)
	.requires(coreComponentPromise.fqnName)
	.requires(userComponentPromise.fqnName)
	.run();