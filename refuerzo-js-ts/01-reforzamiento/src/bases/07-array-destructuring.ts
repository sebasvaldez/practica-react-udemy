
const characterNames =['Goku','Vegeta','Trunks'];

const [p1,p2,p3]= characterNames;

console.log({p1,p2,p3})

//seleccionar solo a Trunks

const [,,Trunks]= characterNames;
console.log({Trunks})


const returnsArrayFn = ()=>{
    return ['ABC',123] as const
}


const [letters,numbers] =  returnsArrayFn();

console.log({letters, numbers})



//tarea 


const useState = (initialText:string)=>{
    return [initialText, (text:string)=>{console.log(text)}] as const;
}

const [name, setName]= useState('Goku');
console.log(name)
setName('Vegeta')