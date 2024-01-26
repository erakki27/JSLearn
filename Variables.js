//global variable
// functionn variable

var x = 10;

function scope(){
    var y = 20;
    console.log(y);
}

console.log(x);
scope();

//Latest declared variable

var browser = "chrome";
var browser = "firefox";

console.log(browser);

//////
var g;
console.log(g); //unndefined
g ="hi";
console.log(g);

// let /// scope variable
//const // final variable
// const need to be declared value

const p =10;