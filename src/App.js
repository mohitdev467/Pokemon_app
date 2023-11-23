import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPokemon from "./components/AddPokemon";
import EditPokemon from "./components/EditPokemon";
import Home from "./components/Home";
import PokemonList from "./components/PokemonList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<PokemonList />} />

          <Route path="/add" element={<AddPokemon />} />
          <Route path="/edit/:id" element={<EditPokemon />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
