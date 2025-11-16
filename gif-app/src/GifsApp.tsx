import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader, SearchBar } from "./shared/components/";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useState } from "react";

export const GifsApp = () => {

  const handleSearchClicked = (search: string) => {
    console.log({ search });
  };

  const handleSearch = (query:string)=>{
    console.log({query})
    
  }

  const [previousSearches, setPreviousSearches] = useState(["Death Note","Attack oon Titans"]);

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
       onQuery ={handleSearch}
       
       />

      {/* Busquedas previas */}

      <PreviousSearches searches={previousSearches} onLabelClicked={handleSearchClicked} />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
