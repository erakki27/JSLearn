// push function
let array1 = ["a","b"];
array1.push('c');
console.log(array1);

//pop function

let array2 =[1,2,3,4];
array2.pop();
console.log(array2);

// shift function

let array3 =["apple","banana"];
array3.shift();
console.log(array3);

//unshift function

let array4 =["apple","banana"]
array4.unshift("pear");
console.log(array4);

//xsplice

let array5 =[1,2,3,4,5];
array5.splice(1,2,6,7,8);
console.log(array5);

//slice function

let array6 =[1,2,3,4,5,6];
let array6a= array6.slice(0,4);
console.log(array6a);

// concat function

let array7 =[1,2,3,4,5];
let alpha =['a','b'];
let array7a = array7.concat(alpha);

console.log(array7a);

//index of function
let array8 =[1,2,3,4,5,4];
let indof4 =array8.indexOf(4);
let indofsecond4 = array8.indexOf(4,array8.indexOf(4)+1);


console.log(indof4);
console.log(indofsecond4);

// include function
let array9 =[1,2,3,4,5,4];

let bol = array9.includes(1,0);
console.log(bol);

//for each function

let array10 =[1,2,3,4,5,4];
array10.forEach((e) =>{
  console.log(e);
});











