"use strict"; 

//Global Variable
var koushik = "hello";

function testing(){
	// Local Variable
	var pratsy = "Bye";
	//Also a global variable because no declaration. 
	//Dont do this. not preferred. use strict checks for this error.
	q = 1;
}

var string = "Hello,koushik"
console.log(string.length);
console.log(string.split(","));
console.log(string.replace("Hello","Bye"));

// Array Definition
var array = [1,2,3,4];
var array2 = [6,7,8,9];
console.log(array.toString());
array[1] = 5;
// Delete element from array
console.log(array.splice(0,1));
// Insert into array using splice
console.log(array.splice(0,0,2,3));
console.log(array.indexOf(3));
console.log(array.indexOf(5));
console.log(array.push(5));
console.log(array.pop());
console.log(array.concat(array2));
console.log(array2.concat(array).sort());

//Loops
for (var i = array.length - 1; i >= 0; i--) {
	console.log(array[i]);
}

if(array[1] == 10) {
	console.log("I am 10");
} else {
	console.log("I am not 10");
}

var j = 0;
while(j < array.length) {
	console.log(array[j]);
	j++;
}

// Implement any sort algorithm using javascript
// Hamming Distance

// JSON JavaScript Object Notation
var myjson = {name:"Koushik"};
myjson.age = 21;
console.log(myjson);
console.log(JSON.stringify(myjson));

var jsonstring = '{"name":"Koushik"}';
console.log(JSON.parse(jsonstring));