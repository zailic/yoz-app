var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var Main = (function () {
    function Main(helloMsg) {
        if (helloMsg === void 0) { helloMsg = "Hello world!"; }
        this.helloMsg = helloMsg;
    }
    Main = __decorate([
        angular2_1.Component({
            selector: "app"
        }),
        angular2_1.View({
            template: "\n\t\t<h1>{{ helloMsg }}</h1>\n\t"
        }), 
        __metadata('design:paramtypes', [String])
    ], Main);
    return Main;
})();
angular2_1.bootstrap(Main);
