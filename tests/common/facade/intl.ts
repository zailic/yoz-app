/// <reference path="../../../typings/karma-jasmine/karma-jasmine" />
import {Inflector} from "common";
export function main():void {
	describe("The 'common/facade/intl' module testing suite", function() {
		it("expects to pluralize a word", () => {
			var inflector = Inflector.getInstance();
			expect("quizzes").toBe(inflector.pluralize("quiz"));
		});
	});	
}