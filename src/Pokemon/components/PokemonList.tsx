import React, { useEffect } from 'react';
import { AppContextInterface, PokemonContext } from '../context/PokemonContext';
import  listPokemons  from './listPokemons';
import { Link } from 'react-router-dom';

const url = 'https://pokeapi.co/api/v2/pokemon';

const PokemonList = () => {
  const { pokemons, capture, addPokemons,capturedPokemons } = React.useContext(PokemonContext) as AppContextInterface;
  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      addPokemons(data.results);
    };
    fetchPokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>
      <Link to='/my/pokemons'>My Pokemons ({capturedPokemons.length})</Link>
        <div>
          <ul>
            {listPokemons({
              pokemons,
              onClick: capture,
              buttonLabel: '+',
            })}
          </ul>
          
        </div>
    </div>
  );
};

export default PokemonList;
