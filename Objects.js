/// 1. Object literals
const user = {
    name : 'Ak',
    age : 30,
    country : 'India',
    Occupation : 'Engineer'
};
console.log(user.name)

// 2. Constructor Function
 function Car(brand, Model,price){
    this.brand= brand;
    this.Model = Model;
    this.price = price;

 };

 const c1=new Car("Kia", "Seltos" ,2500000);
 console.log(c1.brand + " " + c1.Model + " " + c1.price);

 // 3. class style

 class cutstomer{
    constructor(name, product){
        this.name = name;
        this.product = product;

    }
    addtoCart(){
        console.log(`${this.product}`);
    }

 };

 // 4. Object.create(); with some prototype

 const employeePrototype = {
    Printinfo : function(){
        console.log(`hello ${this.name}`);
    }
 };
 const e1 = Object.create(employeePrototype);
 e1.name='Akanksha';
 e1.Printinfo();

 /// 5. Using Factory Function, returns object

 function createDept(deptName, hod){
    return {
        deptName : deptName,
        hod: hod,
    
    getdepartmentinfo: function(){
        console.log(`hellp dept name is ${this.deptName} and hod is ${this.hod}`);
    }
    }
 }
 const d1 = createDept("EC", "Verma");
 const d2 =createDept("CS" ,"Gupta");
 d1.getdepartmentinfo();
 d2.getdepartmentinfo();










