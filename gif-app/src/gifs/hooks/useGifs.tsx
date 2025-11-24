import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";


// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    
    const [previousSearches, setPreviousSearches] = useState<string[]>([]);
    
    const gifsCache = useRef<Record <string, Gif[]>>({})
    


  const handleSearchClicked = async (search: string) => {
    

    if (gifsCache.current[search]) {
      setGifs(gifsCache.current[search]);
      return;
    }

    const gifs = await getGifsByQuery(search);
    setGifs(gifs);
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLocaleLowerCase();

    if (query.length === 0) return;

    if (previousSearches.includes(query)) return;

    //toma el arreglo de las busquedas previas y las limita a 7
    const currentSearches = previousSearches.slice(0, 6);

    //coloca la ultima busqueda al inicio del arreglo de las busquedas previas
    currentSearches.unshift(query);

    //Actualiza el estado que contiene el arreglo de las busquedas previas
    setPreviousSearches(currentSearches);

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);
    gifsCache.current[query] = gifs;
    console.log(gifsCache)
  };

  return {
    //values
    gifs,
    previousSearches,
    //methods
    handleSearchClicked,
    handleSearch,
  };
};
