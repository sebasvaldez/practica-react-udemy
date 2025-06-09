import { useEffect } from "react";
import "./App.css";
import { getPokemons } from "./store/slices/pokemons";
import { useDispatch, useSelector } from "react-redux";
export const PokemonApp = () => {
  const dispatch = useDispatch();

  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>

      <hr />
      <span>{isLoading ? "Cargando..." : ""}</span>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
