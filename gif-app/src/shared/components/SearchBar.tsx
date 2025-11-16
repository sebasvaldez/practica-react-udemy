import { useState, type KeyboardEvent } from "react";

interface Props {
  btnTitle: string;
  placeHolder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({
  btnTitle,
  placeHolder = "Buscar",
  onQuery,
}: Props) => {
  const [query, seTquery] = useState("");

  const handleSearch = () => {
    onQuery(query);
    seTquery("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeHolder}
        value={query}
        onChange={(e) => seTquery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>{btnTitle}</button>
    </div>
  );
};
