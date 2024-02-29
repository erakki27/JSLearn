// function decalration

function add(a,b){
    return a+b;
}

const sum = add(5,6);
console.log(sum);

// functions expression
const multiply=function(x,y){
    return x*y;
}
console.log(multiply(5,6));

// Arrow function

const div = (t1,t2) => t1/t2;

console.log(div(20,2));

//function constructor

const subs = new Function('a','b', 'return a-b; ');
console.log(subs(10,8));
