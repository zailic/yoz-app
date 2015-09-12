
var BASE_CONFING = {
	"baseURL": "/",
	"defaultJSExtensions": true,
	"transpiler": "typescript",
	"paths": {
		"client": "src/client",
		"server": "src/server",
		"common": "src/common",
		"tests": "tests",
		"github:*": "jspm_packages/github/*",
		"npm:*": "jspm_packages/npm/*"
	},
	"packages": {
		"client": {
			"main": "app",
			"defaultExtension": "ts"
		},
		"common": {
			"main": "facade/intl",
			"defaultExtension": "ts"
		},
		"server": {
			"defaultExtension": "ts"
		}
	}
};