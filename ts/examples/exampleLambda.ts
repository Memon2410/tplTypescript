/* se definen con la sintaxis () => {} y es especialmente útil 
para decirle a nuestra aplicación sobre que contexto debe trabajar this*/
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

var shape = {
    name: 'rectangle',
    
    popup: function() {
        console.log('This inside popup(): ' + this.name);

        setTimeout(function() {
            console.log('This inside setTimeout(): ' + this.name);
            console.log("I'm a " + this.name + "!");
        }, 3000);
 
    }
};
 
shape.popup();

// With Lambda
export var stationLambda = {
	names: ["Piera", "Martorell", "Manresa", "Igualada", "Cornellá"],
		randomStation: function() {
			//esta es la clave
			return() => {
				console.log(this);
				var rand = this.names[Math.floor(Math.random() * this.names.length)];
				return { random : rand };
		}
	}
}


var shapeLambda = {
    name: 'rectangle',

    popup: function() { 
        console.log('This inside popup(): ' + this.name);
 
        setTimeout( () => {
            console.log('This inside setTimeout(): ' + this.name);
            console.log("I'm a " + this.name + "!");
        }, 3000);
 
    }
};
 
shapeLambda.popup();
