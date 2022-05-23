import React, { FC } from 'react'
import { Link } from "react-router-dom";


export interface IPokemon{
  name: string
  id : string
  sprite: any
}
interface IProps {
  pokemon: IPokemon
  onClick: (pokemon : IPokemon) => void;
  buttonLabel: string

}
const PokemonCard : FC<IProps> = ({ pokemon, onClick, buttonLabel }) => {
  return (
    <li key={pokemon.name}> 
        <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>  
       <button onClick={() => onClick(pokemon)}>{buttonLabel}</button>
    </li>
  )
}
export default PokemonCard
