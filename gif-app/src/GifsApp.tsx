import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader, SearchBar } from "./shared/components/";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  const handleSearchClicked = (search: string) => {
    console.log({ search });
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
  };

  return (
    <>
      {/* Header */}

      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}

      <SearchBar
        btnTitle="Buscar"
        placeHolder="Busca lo que quieras"
        onQuery={handleSearch}
      />

      {/* Busquedas previas */}

      <PreviousSearches
        searches={previousSearches}
        onLabelClicked={handleSearchClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs.length > 1 ? gifs : mockGifs} />
    </>
  );
};
