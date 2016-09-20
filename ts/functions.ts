/// <reference path="../typings/globals/jquery/index.d.ts" />
/// <reference path="../typings/globals/greensock/index.d.ts" />

import { sayHello } from "./greet";
import { User } from "./examples/exampleClass";
import { Car, Motorcycle } from "./examples/exampleInheritance";
import { UserInterface, Clock } from "./examples/exampleInterface";
import { Shapes, Validator } from "./examples/exampleModule";
import { sum, varSum, vehicleComponents, vehicleComponentsSpread } from "./examples/exampleFunction";
import { stationLambda } from "./examples/exampleLambda";
import { anyType, AllTypes } from "./examples/exampleGenerics";
import { Person, Vehicle, ColorMerging } from "./examples/exampleMerging";

/* Enum -------------------------------------------
crean un tipo que podemos asignar más adelante  */
enum Color {Red, Green, Blue};
var c: Color = Color.Red;
console.log(c);

/* Class --------------------------------------------
-------------------------------- | exampleClass.ts */
var user = new User(1, "Memon", "memo2410@gmail.com", ["Illustration", "Music", "Develop", "Basketball"]);
console.log(user);

/* Inheritance ---------------------------------------
-------------------------- | exampleInheritance.ts */
var car = new Car();
var motorcycle = new Motorcycle(2, 'gasoline');

console.log(car);
console.log(motorcycle);

/* Interface -----------------------------------------
----------------------------- | exampleInterface.ts */
var userInterface = new UserInterface("Memon");
console.log(userInterface);

// Two Interfaces
var clock = new Clock();
console.log("Date: " + clock.getTime());
console.log("Hour: " + clock.getHour());
console.log("Minute: " + clock.getMinute());

/* Module --------------------------------------------
--------------------------------- | exampleModule.ts */
var triangle = new Shapes.Triangle();
console.log(triangle.type());
var square = new Shapes.Square();
console.log(square.type());

/*var circle = new Shapes.Circle(); // error la class no tiene 'export'
console.log(circle.type());*/
console.log(Shapes.nameModule());

// Example Validator 
import EmailValid = Validator.EmailValid;
console.log('validator: ' + new EmailValid().isValid("memo2410@gmail.com"));

/* Functions -----------------------------------------
------------------------------- | exampleFunction.ts */
// Parameters
console.log('sum: ' + sum(1, 5));
console.log('varSum: ' + varSum(2, 5));

// Optional Parameters
let vehicleWhitColor = vehicleComponents(4, 'oil', 'red');
let vehicleWhitouthColor = vehicleComponents(4, 'oil');
console.log('Color: ' + vehicleWhitColor);
console.log('NoColor: ' + vehicleWhitouthColor);

// Spread | ES6 ---------------------------------------
let vehicleWhitSpread = vehicleComponentsSpread(4, 'oil', 'Color: red', 'MaxSpeed: 180', 'Doors: 5');
console.log('Spread: ' + vehicleWhitSpread);

/* Expresiones Lambda ---------------------------------
--------------------------------- | exampleLambda.ts */
var newStationLambda = stationLambda.randomStation()();
console.log("Station: " + newStationLambda.random);


/* Generics --------------------------------------------
--------------------------------- | exampleGenerics.ts */
// Vars
var str = anyType<string>("Hello world");
console.log(str);
 
var num = anyType<number>(1);
console.log(num);
 
var arr = anyType<Array<string>>(["Guillermo", "Rodriguez", "Cruz"]);
console.log(arr.join("|||"));

// Classes
	//number
var types = new AllTypes<number>();
types.sum = function(a, b) {
	return a + b;
}
console.log('num: ' + types.sum(10, 5));
 
	//string
var typesString = new AllTypes<string>();
typesString.sum = function(a, b) {
	return a + b;
}
console.log('str: ' + typesString.sum('10', '5'));

/* Merging --------------------------------------------
-------------------------------- | exampleMerging.ts */
//interfaces 
var person: Person = {age: 34, hobbies: ["family", "program"], profession: "programmer", name: "Israel"};
console.log(person);

//modules
import vehicle = Vehicle;
var carMerging = new vehicle.Car();
console.log("Car: " + carMerging.getProperties());
 
var motorcycleMerging = new vehicle.Motorclycle();
console.log("Motorcycle: " + motorcycleMerging.getProperties());

//modules - enums
import color = ColorMerging;
console.log(color.mixColor("white"));



/* Connect 'Say Hello | greet.ts' */
function showHello(divName: string, name: string) {
	const elt = document.getElementById(divName);
	elt.innerText = sayHello(name);
}
		
showHello("greetings", "TypeScript");

/* JQUERY */
'use strict';
class Main {
    constructor() {
        $(document).ready(() => {
            console.log('Ready!');

            TweenMax.from($('header'), 2, {delay:2, scaleX:0.5, ease:Expo.easeIn	});
            TweenMax.to($('article'), 1, {delay:4, rotationX:90, ease:Power2.easeOut});
            TweenMax.to($('.site-footer'), 3, {delay:5, x: 100, y: -200, ease:Elastic.easeInOut})
        });

        $(window).resize(() => {
        	console.log('Resize!!');
        });
    }
}

var main:Main = new Main();
