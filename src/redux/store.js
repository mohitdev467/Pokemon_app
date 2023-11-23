import PokemonReducer from "./reducers/PokemonReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    pokemons: PokemonReducer,
  },
});
