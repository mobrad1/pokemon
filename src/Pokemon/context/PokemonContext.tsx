import React, {  PropsWithChildren } from 'react';
import { usePokemonReducer } from '../reducers/usePokemonReducer';
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS } from '../actions/actions';
import { IPokemon } from '../components/PokemonCard';

export interface AppContextInterface {
    pokemons : any[],
    capture : any,
    addPokemons : (pokemon : any) => void,
    capturedPokemons :IPokemon[],
    release : any,
    addPokemon : (pokemon : any) => void,
 }
  
export const PokemonContext = React.createContext<AppContextInterface | undefined>(undefined);

const PokemonProvider  = (props : PropsWithChildren<{}>) => {
  const [state, dispatch] = usePokemonReducer();
  const { pokemons, capturedPokemons } = state;
  const capture = (pokemon: any) => dispatch({ type: CAPTURE, pokemon} as any);
  const release = (pokemon: any) => dispatch({ type: RELEASE, pokemon} as any);
  const addPokemon = (pokemon: any) => dispatch({ type: ADD_POKEMON, pokemon} as any);
  const addPokemons = (pokemons: any) => dispatch({ type: ADD_POKEMONS, pokemons } as any);

 
  return (
    <PokemonContext.Provider  value={{ pokemons,
      capturedPokemons,
      capture,
      release,
      addPokemon,
      addPokemons }}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;