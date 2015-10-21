import {Component, View, bootstrap} from "angular2/angular2";
@Component({
	selector: "app"
})
@View({
	template: `
		<h1>{{ helloMsg }}</h1>
	`
})
class Main {
	constructor(public helloMsg:string = "Hello world!") {

	}
}

bootstrap(Main);