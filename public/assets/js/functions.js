(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
/* Tienen propiedades, constructor, los métodos pueden
devolver tipos o nada (void) */
class User {
    constructor(id, name, email, hobbies) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.hobbies = hobbies;
    }
}
exports.User = User;
},{}],2:[function(require,module,exports){
"use strict";
/*  son lo mismo que en javascript, la principal diferencia, son
 los tipos, pueden tener argumentos tipados y devolver un tipo
 de dato o no devolver nada (void) */
// Parameters
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
exports.varSum = function (a, b) {
    return a + b;
};
// Optional Parameters
function vehicleComponents(wheels, fuel, color) {
    if (color) {
        return "Wheels: " + wheels + ", fuel: " + fuel + ", color: " + color;
    }
    else {
        return "Wheels: " + wheels + ", fuel: " + fuel;
    }
}
exports.vehicleComponents = vehicleComponents;
// Spread | ES6
// El operador Spread(…) aparece con ecmascript 6 y sirve para decirle a un método
// o función el resto de parámetros sin que todos ellos sean definidos.
function vehicleComponentsSpread(wheels, fuel, ...moreData) {
    return "Wheels: " + wheels + ", fuel: " + fuel + ", moreData: " + moreData.join(", ");
}
exports.vehicleComponentsSpread = vehicleComponentsSpread;
},{}],3:[function(require,module,exports){
"use strict";
/* permiten no establecer un tipo concreto a algo, variable,
propiedad, método, clase etc <T>*/
// Vars
function anyType(data) {
    return data;
}
exports.anyType = anyType;
// Classes
class AllTypes {
}
exports.AllTypes = AllTypes;
},{}],4:[function(require,module,exports){
/* debemos extender la class para heredar otra class | 'extends' */
"use strict";
class Vehicle {
    constructor(wheels, fuel, color = 'White') {
        this.wheels = wheels;
        this.fuel = fuel;
        this.color = color;
    }
}
class Car extends Vehicle {
    constructor() {
        super(1, "gasoil", 'Red');
    }
}
exports.Car = Car;
class Motorcycle extends Vehicle {
}
exports.Motorcycle = Motorcycle;
},{}],5:[function(require,module,exports){
/* permiten crear contratos que otras clases deben firmar para
poder utilizarlos, podemos implementar más de una interfaz en la misma clase. */
"use strict";
class UserInterface {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.UserInterface = UserInterface;
class Clock {
    constructor() {
        this.currentTime = new Date();
    }
    getTime() {
        return this.currentTime;
    }
    getHour() {
        return this.currentTime.getHours();
    }
    getMinute() {
        return this.currentTime.getMinutes();
    }
}
exports.Clock = Clock;
},{}],6:[function(require,module,exports){
"use strict";
/* se definen con la sintaxis () => {} y es especialmente útil
para decirle a nuestra aplicación sobre que contexto debe trabajar this*/
// With Lambda
exports.stationLambda = {
    names: ["Piera", "Martorell", "Manresa", "Igualada", "Cornellá"],
    randomStation: function () {
        //esta es la clave
        return () => {
            console.log(this);
            var rand = this.names[Math.floor(Math.random() * this.names.length)];
            return { random: rand };
        };
    }
};
// Not Lambda don´t work | this = undefined
/*
var names = ["Piera", "Martorell", "Manresa", "Igualada", "Cornellá"];
var station = {
    randomStation: function() {
        return function() {
            console.log(this);
            var rand = this.names[Math.floor(Math.random() * this.names.length)];
            return { random : rand };
        }
    }
}
var newStation = station.randomStation()();
console.log("Station: " + newStation.random);
*/
},{}],7:[function(require,module,exports){
"use strict";
//modules
var Vehicle;
(function (Vehicle) {
    class Car {
        getProperties() {
            return "Numwheels: 4, fueltype: oil";
        }
    }
    Vehicle.Car = Car;
})(Vehicle = exports.Vehicle || (exports.Vehicle = {}));
var Vehicle;
(function (Vehicle) {
    class Motorclycle {
        getProperties() {
            return "Numwheels: 2, fueltype: gasoline";
        }
    }
    Vehicle.Motorclycle = Motorclycle;
})(Vehicle = exports.Vehicle || (exports.Vehicle = {}));
//modules - enums
(function (ColorMerging) {
    ColorMerging[ColorMerging["red"] = 1] = "red";
    ColorMerging[ColorMerging["green"] = 2] = "green";
    ColorMerging[ColorMerging["blue"] = 4] = "blue";
})(exports.ColorMerging || (exports.ColorMerging = {}));
var ColorMerging = exports.ColorMerging;
var ColorMerging;
(function (ColorMerging) {
    function mixColor(colorName) {
        if (colorName == "yellow") {
            return ColorMerging.red + ColorMerging.green;
        }
        else if (colorName == "white") {
            return ColorMerging.red + ColorMerging.green + ColorMerging.blue;
        }
        else if (colorName == "magenta") {
            return ColorMerging.red + ColorMerging.blue;
        }
        else if (colorName == "cyan") {
            return ColorMerging.green + ColorMerging.blue;
        }
    }
    ColorMerging.mixColor = mixColor;
})(ColorMerging = exports.ColorMerging || (exports.ColorMerging = {}));
},{}],8:[function(require,module,exports){
"use strict";
/* permiten agrupar alguna lógica para que sea exportada y utilizada
donde y cuando necesitemos, es un forma de crear aplicaciones
escalables con cierto orden y un código fácil de mantener */
var Shapes;
(function (Shapes) {
    class Triangle {
        type() {
            return "Triangle";
        }
    }
    Shapes.Triangle = Triangle;
    class Square {
        type() {
            return "Square";
        }
    }
    Shapes.Square = Square;
    //sólo es útil desde dentro del modulo
    class Circle {
        type() {
            return "Circle";
        }
    }
    function nameModule() {
        return "Shapes";
    }
    Shapes.nameModule = nameModule;
    ;
})(Shapes = exports.Shapes || (exports.Shapes = {}));
// Example Validator
var Validator;
(function (Validator) {
    class EmailValid {
        isValid(email) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        }
    }
    Validator.EmailValid = EmailValid;
})(Validator = exports.Validator || (exports.Validator = {}));
},{}],9:[function(require,module,exports){
"use strict";
const greet_1 = require("./greet");
const exampleClass_1 = require("./examples/exampleClass");
const exampleInheritance_1 = require("./examples/exampleInheritance");
const exampleInterface_1 = require("./examples/exampleInterface");
const exampleModule_1 = require("./examples/exampleModule");
const exampleFunction_1 = require("./examples/exampleFunction");
const exampleLambda_1 = require("./examples/exampleLambda");
const exampleGenerics_1 = require("./examples/exampleGenerics");
const exampleMerging_1 = require("./examples/exampleMerging");
/* Enum -------------------------------------------
crean un tipo que podemos asignar más adelante  */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
console.log(c);
/* Class --------------------------------------------
-------------------------------- | exampleClass.ts */
var user = new exampleClass_1.User(1, "Memon", "memo2410@gmail.com", ["Illustration", "Music", "Develop", "Basketball"]);
console.log(user);
/* Inheritance ---------------------------------------
-------------------------- | exampleInheritance.ts */
var car = new exampleInheritance_1.Car();
var motorcycle = new exampleInheritance_1.Motorcycle(2, 'gasoline');
console.log(car);
console.log(motorcycle);
/* Interface -----------------------------------------
----------------------------- | exampleInterface.ts */
var userInterface = new exampleInterface_1.UserInterface("Memon");
console.log(userInterface);
// Two Interfaces
var clock = new exampleInterface_1.Clock();
console.log("Date: " + clock.getTime());
console.log("Hour: " + clock.getHour());
console.log("Minute: " + clock.getMinute());
/* Module --------------------------------------------
--------------------------------- | exampleModule.ts */
var triangle = new exampleModule_1.Shapes.Triangle();
console.log(triangle.type());
var square = new exampleModule_1.Shapes.Square();
console.log(square.type());
/*var circle = new Shapes.Circle(); // error la class no tiene 'export'
console.log(circle.type());*/
console.log(exampleModule_1.Shapes.nameModule());
// Example Validator 
var EmailValid = exampleModule_1.Validator.EmailValid;
console.log('validator: ' + new EmailValid().isValid("memo2410@gmail.com"));
/* Functions -----------------------------------------
------------------------------- | exampleFunction.ts */
// Parameters
console.log('sum: ' + exampleFunction_1.sum(1, 5));
console.log('varSum: ' + exampleFunction_1.varSum(2, 5));
// Optional Parameters
let vehicleWhitColor = exampleFunction_1.vehicleComponents(4, 'oil', 'red');
let vehicleWhitouthColor = exampleFunction_1.vehicleComponents(4, 'oil');
console.log('Color: ' + vehicleWhitColor);
console.log('NoColor: ' + vehicleWhitouthColor);
// Spread | ES6 ---------------------------------------
let vehicleWhitSpread = exampleFunction_1.vehicleComponentsSpread(4, 'oil', 'Color: red', 'MaxSpeed: 180', 'Doors: 5');
console.log('Spread: ' + vehicleWhitSpread);
/* Expresiones Lambda ---------------------------------
--------------------------------- | exampleLambda.ts */
var newStationLambda = exampleLambda_1.stationLambda.randomStation()();
console.log("Station: " + newStationLambda.random);
/* Generics --------------------------------------------
--------------------------------- | exampleGenerics.ts */
// Vars
var str = exampleGenerics_1.anyType("Hello world");
console.log(str);
var num = exampleGenerics_1.anyType(1);
console.log(num);
var arr = exampleGenerics_1.anyType(["Guillermo", "Rodriguez", "Cruz"]);
console.log(arr.join("|||"));
// Classes
//number
var types = new exampleGenerics_1.AllTypes();
types.sum = function (a, b) {
    return a + b;
};
console.log('num: ' + types.sum(10, 5));
//string
var typesString = new exampleGenerics_1.AllTypes();
typesString.sum = function (a, b) {
    return a + b;
};
console.log('str: ' + typesString.sum('10', '5'));
/* Merging --------------------------------------------
-------------------------------- | exampleMerging.ts */
//interfaces 
var person = { age: 34, hobbies: ["family", "program"], profession: "programmer", name: "Israel" };
console.log(person);
//modules
var vehicle = exampleMerging_1.Vehicle;
var carMerging = new vehicle.Car();
console.log("Car: " + carMerging.getProperties());
var motorcycleMerging = new vehicle.Motorclycle();
console.log("Motorcycle: " + motorcycleMerging.getProperties());
//modules - enums
var color = exampleMerging_1.ColorMerging;
console.log(color.mixColor("white"));
/* Connect 'Say Hello | greet.ts' */
function showHello(divName, name) {
    const elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
showHello("greetings", "TypeScript");
},{"./examples/exampleClass":1,"./examples/exampleFunction":2,"./examples/exampleGenerics":3,"./examples/exampleInheritance":4,"./examples/exampleInterface":5,"./examples/exampleLambda":6,"./examples/exampleMerging":7,"./examples/exampleModule":8,"./greet":10}],10:[function(require,module,exports){
"use strict";
function sayHello(name) {
    return 'Hello from ' + name;
}
exports.sayHello = sayHello;
},{}]},{},[9])


//# sourceMappingURL=functions.js.map
