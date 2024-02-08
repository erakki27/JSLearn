//1. Map function

let number = [1,2,3];

let double = number.map((e) => e*2);
console.log(double);


//map function

let inches = [5,8,10,50];

function cm(inc){
    return inc * 2.54;

}

let convertedCM = inches.map(cm);
console.log(convertedCM);

//2. Filter

let mixedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let evenNum = mixedArray.filter((e) => e%2==0);
console.log(evenNum);

//example 2

let employee = [
    {"name" :"akanksha", "age": 35 , gender :"female"},
    {"name" :"test1", "age": 40 , gender :"male"},
    {"name" :"test2", "age": 25 , gender :"male"},
    {"name" :"test3", "age": 20 , gender :"female"},
];

let Femployeover20 = employee.filter((emp) =>{
    return emp.gender =="female" && emp.age >=20
})

console.log(Femployeover20);

// 3. reduce

let numbers = [1,2,3,4,5,6];

let sum = numbers.reduce((acc,num) => acc+num,0);
// 0+1 =1
// 1+2 =3
// 3+3 =6
// 6+4 =10
// 10+5= 15
// 15+6 =21 result

console.log(sum);

//example 2

let top =[10,5,25,8,30,15];

let max = top.reduce((max,num) => {  
    if(num>max){
        return num
    }
    else{
    return max;
    }
},top[0]);

console.log(max);

// max 10 , num 5   return 10
// max 10, num  25 return 25
// max 10, num 8 return 8

//example 3

let smalled = [10,5,25,8,30,15];

let min = smalled.reduce((min,num) => {
    if(num<min){
return num
    }else {
        return min
    }
}, smalled[0]);
console.log(min);

//example 4

let cartIteam = [
    {name : "Jeans" , price : 500},
    {name : "Shirt" , price : 300},
    {name : "Shoes" , price : 1000},
    {name : "Tshirt" , price : 700},
]

let cost = cartIteam.reduce((total,item) => total+item.price,0);
console.log(cost);

