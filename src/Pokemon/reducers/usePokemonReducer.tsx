
import { useReducer } from 'react';
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS } from '../actions/actions';

const getCapturedPokemons = (capturedPokemons: any[], releasedPokemon: any) =>
  capturedPokemons.filter((pokemon: any) => pokemon !== releasedPokemon);

const releasePokemon = (releasedPokemon: any, state: { pokemons: any; capturedPokemons: any; }) => ({
  pokemons: [...state.pokemons, releasedPokemon],
  capturedPokemons: getCapturedPokemons(
    state.capturedPokemons,
    releasedPokemon
  ),
});

const getPokemonsList = (pokemons: any[], capturedPokemon: any) =>
  pokemons.filter((pokemon: any) => pokemon !== capturedPokemon);

const capturePokemon = (pokemon: any, state: { pokemons: any; capturedPokemons: any; }) => ({
  pokemons: getPokemonsList(state.pokemons, pokemon),
  capturedPokemons: [...state.capturedPokemons, pokemon],
});

const addPokemon = (pokemon: any, state: { pokemons: any; capturedPokemons: any; }) => ({
  pokemons: [...state.pokemons, pokemon],
  capturedPokemons: state.capturedPokemons,
});

const addPokemons = (pokemons: any, state: { capturedPokemons: any; }) => ({
  pokemons: pokemons,
  capturedPokemons: state.capturedPokemons,
});

const pokemonReducer = (state: any, action: { type: any; pokemon: any; pokemons: any; }) => {
  switch (action.type) {
    case CAPTURE:
      console.log(action.type)
      return capturePokemon(action.pokemon, state);
    case RELEASE:
      return releasePokemon(action.pokemon, state);
    case ADD_POKEMON:
      return addPokemon(action.pokemon, state);
    case ADD_POKEMONS:
      return addPokemons(action.pokemons, state);
    default:
      return state;
  }
};

export const usePokemonReducer = () =>
  useReducer(pokemonReducer, {
    pokemons: [],
    capturedPokemons: [],
  });