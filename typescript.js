// const sum = (a : number, b : number) => {
//   return a + b;
// }
// const answer = sum(3, 5);
// console.log(answer);
// boolean
var isCool = true;
// number
var age = 34;
// string
var eyeColor = 'blue';
var favouriteQuote = "i'm not old im only ".concat(age);
// Array
var pets = [
    'cat',
    'dog',
];
var pets2 = [
    'lion',
    'dragon',
    'zebra'
];
// Object
var wizard = {
    a: 'john'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basket', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeNameNum = Size.Small;
// Any - !!!!!!!! BE CAREFUL
var whatever = true;
// void
var sing = function () {
    console.log('when you see me come around...🎵');
};
// never
// never for function does not return anything.
var error = function () {
    throw Error('oooop!');
};
var fightRobotArmy = function (robots) {
    console.log('FIghT!');
};
var fightRobotArmyTwo = function (robots) {
    console.log('FIghT!');
};
var dog = {};
dog.count;
// Function
var fightRobotArmyTw = function (robots) {
    console.log('FIghT!');
};
var fightRobotArmyThr = function (robots) {
    console.log('FIghT!');
    return 5;
};
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "lalalala";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal('RAAAAAWR');
lion.sing;
// Union
var confused = true;
var x = 4;
