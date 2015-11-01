/**
 * @author     Thomas Burleson
 * @author     StackOverflow - Harto, 
 *   http://stackoverflow.com/questions/2315408/how-do-i-format-a-timestamp-in-javascript-to-display-it-in-graphs-utc-is-fine
 * @description
 * DateTime utility class that spits out UTC timestamp strings usually used in a reporting, print-capable process.
 */
export class DateTime {
	
	constructor() {}
	
	public now () {
		return this.buildTimeString(new Date());
	}
	
	protected buildTimeString(date:Date, format?:string):string {
		let f = format || "%h:%m:%s:%z";
		return f.replace(/%([a-zA-Z])/g, (_, fmtCode) => {
            switch (fmtCode) {
                case "Y":
                    return date.getFullYear();
                case "M":
                    return this.pad(date.getMonth() + 1);
                case "d":
                    return this.pad(date.getDate());
                case "h":
                    return this.pad(date.getHours());
                case "m":
                    return this.pad(date.getMinutes());
                case "s":
                    return this.pad(date.getSeconds());
                case "z":
                    return this.pad(date.getMilliseconds(), true);
                default:
                    throw new Error("Unsupported format code: " + fmtCode);
            }
        });
	} 
	
	protected pad(value, isMilliseconds?:boolean) {	
		if (typeof (isMilliseconds) === "undefined") {
        	isMilliseconds = false;
        }
		if (isMilliseconds) {
			if (value < 10) {
				value = "00" + value;
			}
			else if (value < 100) {
				value = "0" + value;
			}
		}
		return (value.toString().length < 2) ? "0" + value : value;	
	}
}