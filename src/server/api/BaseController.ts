export class BaseController {
	constructor(private apiName: string) {}
	get(req, res, callback): void {
		let xhrCode = 200;
		let timeoutSec:number = 0;
		if (xhrCode === 200) {
			setTimeout(() => callback(), timeoutSec);
		} else {
			res.status(xhrCode).send('mock error');
		}
    }
}