import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyPokemonList from "./Pokemon/pages/MyPokemonList";
import PokemonProvider from "./Pokemon/context/PokemonContext";
import PokemonDetails from "./Pokemon/pages/PokemonDetails";
import PokemonListPage from "./Pokemon/pages/PokemonListPage";

function App() {
  return (
    <PokemonProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <PokemonListPage/> } />
        <Route path="/pokemon/:name" element={ <PokemonDetails/> } />
        <Route path="/my/pokemons" element={ <MyPokemonList/> } />
      </Routes> 
    </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
