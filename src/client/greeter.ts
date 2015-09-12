export class Greeter {
	private timerToken;
	public time: string;
	constructor() {
		this.time = new Date().toUTCString();
	}

	public start():void {
		this.timerToken = setInterval(() => this.time = new Date().toUTCString(), 500);
	}

	public end():void {
		clearTimeout(this.timerToken);
	}
	
}