/// <reference path="../../../../typings/angularjs/angular.d.ts" />
interface IEnhancedLogger extends angular.ILogService {
	getInstance: (s:string) => IEnhancedLogger; 	
}

interface BrowserInfoEntity {
    string?: string;
    subString?: string;
    identity: string;
    versionSearch?: string;
	prop?:string;
}