import { heroes } from "../data/heroes.js"

export const getHeroById = (id) => {
    
   return heroes.find(heroe=> heroe.id===id)

}
