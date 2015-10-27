export class InterpolateFilter extends String {
	public static Factory(version:string) {
		return (input:string) => {
			return String(input).replace(/\%VERSION\%/mg, version);				
		}
	}		
}