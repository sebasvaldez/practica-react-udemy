//estilo clasico, tengo que indicar la naturaleza del dato a recibir y del dato de salida
function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string): string => `Hola ${name}`;



interface User {
    uid:string;
    userName:string
}


function getUser(): User {
  return {
    uid: "ABC-123",
    userName: "El_Loco23",
  };
}

const getUser2 = (): User => ({
  uid: "ABC-123",
  userName: "El_Loco23",
});

console.log(greet("Goku"));
console.log(greet2("Vegeta"));

console.log(getUser());
console.log(getUser2());
