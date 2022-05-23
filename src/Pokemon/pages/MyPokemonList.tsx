import React from "react";
import { Link } from "react-router-dom";
import listPokemons from "../components/listPokemons";
import { AppContextInterface, PokemonContext } from "../context/PokemonContext";

const MyPokemonList = () => {
  const { capturedPokemons, release } = React.useContext(
    PokemonContext
  ) as AppContextInterface;
  return (
    <div className="pokemons-list">
      <h2>My Pokemon List</h2>
      <Link to="/">View All</Link>
      <div>
        <ul>
          {listPokemons({
            pokemons: capturedPokemons,
            onClick: release,
            buttonLabel: "-",
          })}
        </ul>
        
      </div>
    </div>
  );
};
export default MyPokemonList;
