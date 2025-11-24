import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader, SearchBar } from "./shared/components/";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { handleSearch, handleSearchClicked, gifs, previousSearches } =
    useGifs();

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
