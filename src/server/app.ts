import express from "express";
import {Server, createServer} from "http";
//import bodyParser from "body-parser";
import {sampleApi} from "server/api/sample/SampleShell";

export class App {
	
	private expressApp: any;
	private httpServer: Server;
	
	constructor(private config: any) {
		this.expressApp = express();
		this.httpServer = createServer(this.expressApp);

	}
	
	private listen(): void {
		
		var p:number;
		
		console.log("Startig server...");
		
		//this.expressApp.use(bodyParser.json({limit: '50mb'}));
		
		this.expressApp.use((req, res, next) => {
			res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTION");
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			next();
		});
		
		// Init the sample API
		sampleApi(this.expressApp);	
			
		// Start server
		this.httpServer.listen(
			p = this.config.port || 3000, 
			process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined,
			() => {
				console.log(
					'Server is listening on %d, in %s mode', p, this.expressApp.get('env')
				);
			}
		);

	}
	
	public run(): void{
		this.listen();
	}
}