
var fs = require("fs"),
	vm = require("vm"),
	System = require('systemjs'),
	process = require('process'),
	path = require("path");
	
global.ts = require('typescript');

process.chdir('../../');

// todo: Make this dinamically
global.APPLICATION_ROOT_DIR = 'file:///'  + path.resolve(__dirname,'../..');
 
include("config/tools.js", global);

include("config/config-common.js", global);

include("config/config-server.js", global);

include("config.js", global);

System.import('server/app')
	.then(function(m) {
		var app = new m.App({});
		app.run();
	})
	.catch(function(err){
		console.log("Error: ", err.stack);	
	});

function include(path, context) {
    var code = fs.readFileSync(path, 'utf-8');
    vm.runInContext(code, vm.createContext(context));
}	
	