
//interfaces para crear objetos literales
interface Person{
     firstName:string;
     lastName:string;
     age:number;

     address?:{
        postalCode:number;
        city:string
     }
}


const IronMan: Person= {
    firstName:'Tony',
    lastName:'Stark',
    age: 38,
    address:{
        postalCode:4000,
        city:'Tucumán'
    }
}

const spiderman:Person={
    firstName: "",
    lastName: "",
    age: 22
}



// const SpiderMan=structuredClone(IronMan);

// SpiderMan.firstName="Peter";
// SpiderMan.lastName="Parker";
// SpiderMan.age=18;

console.log(IronMan)
console.log(spiderman)