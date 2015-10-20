export interface ApiResponseInterface {
	success:boolean;
	errorCode?:number;
	errorMessages?: string[];
	data?:any;
}