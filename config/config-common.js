
var BASE_CONFING = {
	"defaultJSExtensions": true,
	"transpiler": "typescript",
	"paths": {
		"github:*": "jspm_packages/github/*",
		"npm:*": "jspm_packages/npm/*"
	},
	"map": {
		"client/angular2-app": "src/client/angular2-app",			
		"client/angular-app": "src/client/angular-app",			
		"common": "src/common",
		"server": "src/server"
	},
	"packages": {
		"client/angular2-app": {
			"defaultExtension": "ts",
			"main": "app.ts"
		},
		"client/angular-app": {
			"defaultExtension": "ts",
			"main": "App.ts"
		},
		"common": {
			"defaultExtension": "ts"
		},
		"server": {
			"defaultExtension": "ts"
		}
	}
};