
const sqaure = num => num * num;
const result = sqaure(5);
console.log(result);

const fullname = (person) => `${person.firstname} ${person.lastname}`

const person ={
    firstname : 'Akanksha',
    lastname : 'Singh'
}
console.log(fullname(person));

//rest parameter
const browserinfo =(browser = 'chrome' , ...details) =>{
  console.log(`Browser : ${browser}`);
  console.log('detail:', details);
};
browserinfo();
browserinfo('fireforx', '115.11' ,'version10','headless')

//max number using match
const maxvalue =(a,b,c) => {
   return Math.max(a,b,c);
};

console.log(maxvalue(10,20,30))

