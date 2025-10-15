import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <div className="content-center">
        <h1>Buscador de gifs</h1>
        <p>Descubre y comparte el gif perfecto para cada ocación</p>
      </div>
      {/* Search */}
      <div className="search-container">
        <input type="text" placeholder="Buscar gif" />
        <button>Buscar</button>
      </div>
      {/* Busquedas previas */}
      <div className="previous-searches">
        <h2>Busquedas previas</h2>
        <ul className="preveous-searches-list">
            <li>goku</li>
            <li>Saitama</li>
            <li>Elden Ring</li>
        </ul>
      </div>
      {/* Gifs */}
      <div className="gifs-container">
        {mockGifs.map(gif =>(
            <div key={gif.id} className="gif-card">
                <img src={gif.url} alt={gif.title} />
                <h3>{gif.title}</h3>
                <p>
                    {gif.width}x{gif.height} (1.5mb)
                </p>

            </div>
        ))}
      </div>
    </>
  );
};
