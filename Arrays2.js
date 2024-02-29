//every function

let a1 =[1,2,3,4,5];
let flag = a1.every((e) => e<10);
console.log(flag);

//some function

let a2 = [1,2,3,4,5];

//let flag1 = a2.some((e) => e%2==0);
let flag1 = a2.some((e) => e>20);

console.log(flag1);

//find function

let a3 =[1,4,3,7,9,5];
let moduls = a3.find((e) => e%2==0);
console.log(moduls);

//index of function

let fruit = ["apple","mango","orange","grapes"];
console.log(fruit.indexOf('apple'));

//Last index of

let fruit1 = ["apple","mango","orange","grapes","apple"];
console.log(fruit1.lastIndexOf('apple'));

//reverse function

let num = [1,4,5,6,1,8];
console.log(num.reverse());

// sort function

let ff = ["apple","mango","orange","grapes","apple"];
console.log(ff.sort());

let num1 = [1,4,5,6,1,8];
console.log(num1.sort());



