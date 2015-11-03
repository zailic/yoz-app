interface Function {
	method: (name, func) => Function
}

interface StringConstructor {
	supplant: (template:string, values:any[], pattern?:RegExp) => string
}