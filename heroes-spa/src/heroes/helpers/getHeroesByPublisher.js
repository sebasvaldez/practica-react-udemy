import { heroes } from "../data/heroes.js";

export const getHeroesByPublisher = (publisher) => {

  const validPublishers = ['DC Comics','Marvel Comics'];

  if(!validPublishers.includes(publisher)){
    throw new Error(`El nombre ${publisher} no es válido.`);
    
  }
  return heroes.filter(heroe => heroe.publisher==publisher)

};


