var TESTS_CONFING = {
	"baseURL": "/base",
	"packages": {
		"tests": {
			"main": "bootstrap",
			"defaultExtension": "ts"
		}
	}
};
System.config(mergeConfigs(BASE_CONFING,TESTS_CONFING));