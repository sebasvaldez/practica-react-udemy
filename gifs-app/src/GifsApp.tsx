import { useState } from "react";
import { PreviousSearches } from "./gifs/components";
import { GifList } from "./gifs/components/GifList";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader, SearchBar } from "./shared/components";

export const GifsApp = () => {

  const [previousSearches, setPreviousSearches] = useState(['death note']);

  const handleTermClicked = (term:string) =>{
    console.log({term})
  }

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" />
      {/* Busquedas previas */}
      <PreviousSearches 
      searches={["Goku", "Saint Seiya", "Death Note"]}
      onLabelClicked={handleTermClicked}
      />
      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
