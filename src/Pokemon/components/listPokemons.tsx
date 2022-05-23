import React, { FC } from 'react'
import PokemonCard, { IPokemon } from './PokemonCard'

interface IPokemonsListProps {
    pokemons: IPokemon[],
    onClick: any,
    buttonLabel: string
}

const listPokemons : FC<IPokemonsListProps> = ({pokemons,onClick,buttonLabel}) => {
  return (
    <React.Fragment>
        {pokemons.map((pokemon,index) => {
            return <PokemonCard pokemon={pokemon} onClick={onClick} buttonLabel={buttonLabel} key={index}></PokemonCard>
        })}
    </React.Fragment>
  )

}
export default listPokemons
