var a = 5;
//console.log(a);
var text = "Hello";
//console.log(text);
var numberArray = [1, 2, 3, 4, 5];
var numberArrayTwo = [10, 11, 12];
var stringArray = ["proba", "text", "more text"];
var Villager = /** @class */ (function () {
    function Villager() {
        this.greeting = 'Villager say - Hello';
    }
    Villager.prototype.greet = function () {
        console.log(this.greeting);
    };
    return Villager;
}());
var Gosho = new Villager();
Gosho.greet();
