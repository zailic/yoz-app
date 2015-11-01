import "angular-app-assets/app.css!";
import material from "angular-material";
import { Application } from './Application';
import {versionComponentPromise} from "./core/version/version";
import {userComponentPromise} from "./user/UserRegister";
let APP_NAME="angular-app";
let app = new Application(APP_NAME);
app
	.requires(material)
	.requires(versionComponentPromise.fqnName)
	.requires(userComponentPromise.fqnName)
	.run();