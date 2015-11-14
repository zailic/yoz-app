export class NoSpaceFilter {
	static filter() {
		return (value:string) => (!value) ? '' : value.replace(/ /g, '');
	}
}