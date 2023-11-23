import { createSlice } from "@reduxjs/toolkit";
import { pokemonList } from "../../Data/PokemonsData";
import { saveStateToLocalStorage } from "../../Utils/localStorage";

const storedPokemonList = JSON.parse(localStorage.getItem("pokemonList"));
const initialState = storedPokemonList || pokemonList;

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.push(action.payload);
      saveStateToLocalStorage(state);
    },
    updatePokemon: (state, action) => {
      const { id, name, breed, description } = action.payload;
      const pokemonP = state.find((poke) => poke.id == id);
      if (pokemonP) {
        pokemonP.name = name;
        pokemonP.breed = breed;
        pokemonP.description = description;
        saveStateToLocalStorage(state);
      }
    },
    removePokemon: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((poke) => poke.id === id);

      if (index !== -1) {
        state.splice(index, 1);

        saveStateToLocalStorage(state);
      }
    },
  },
});

export const { addPokemon, updatePokemon, removePokemon } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
