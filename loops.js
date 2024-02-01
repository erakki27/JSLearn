
for(let i=1 ;i<=10; i++){
   console.log(i);
}

// For of loop
console.log("----------------");
const arr = ["a","b","c"];
for(const e of arr){
   console.log(e);

}

// for in loop
console.log("----------------");
const user = {
   name : "akanksha",
   age : 30,
   city : "Bangalore"
}
for (const v in user){
 console.log(v +" : " +user[v]);
}

//while
console.log("----------------");

let p =2;
while(p<=10){
console.log(p);
p=p+2;
}

// do while

console.log("----------------");
let h=1;
do{
   console.log(h);
   h++;
}

while(h<=10);

