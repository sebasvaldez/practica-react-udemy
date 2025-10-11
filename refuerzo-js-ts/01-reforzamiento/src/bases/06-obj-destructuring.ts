interface SuperHero {
    name:string;
    age:number,
    key:string,
    skills:string[]

}

const ironMan:SuperHero= {
    name:'Tony',
    age:45,
    key:'ironman',
    skills:['fly','super strength']

}

//const {age,key,name}= ironMan;

//console.log({name,age,key})

const usecontext = ({name,age,key, skills}:SuperHero)=>{
    return{
        name,
        key,
        age,
        skills
    }
}

const {name,age,key,skills} = usecontext(ironMan);

console.log(name,age,key,skills[0],skills[1])