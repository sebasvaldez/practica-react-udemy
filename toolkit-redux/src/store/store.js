import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from "./slices/pokemons";


export const store= configureStore({
    reducer:{
        //counter:counterSlice.reducer,
        pokemons:pokemonSlice.reducer
    },
})