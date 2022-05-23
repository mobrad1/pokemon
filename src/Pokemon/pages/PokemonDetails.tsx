import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

 const PokemonDetails = () => {
  let params = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`;
  const [pokemon, setPokemon] = useState<any>();
  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPokemon(data);
    };
    fetchPokemons();
  }, [url]);
  return (
    <div>
      <div className='pokemon-detail-header'>
        <h1>{pokemon?.name}</h1>
        <div>
          <Link to='/my/pokemons' className='link'>My List <span className='text-black'>|</span> </Link>
          <Link to='/' className='link'>View All Pokemon</Link>
        </div>
      </div>
      
      <div className='pokemon-detail-body'>
        <div className='pokemon-image'>
          <img src={pokemon?.sprites?.other?.home?.front_default} alt="" />
        </div>
        <div className='pokemon-description'>
          <div className='pokemon-types'>
            <h4>Types</h4>
            <div>
              {pokemon?.types.map((type :any, index:any) => {
                return <div key={index} className="pokemon-type-item">{type.type.name}</div>
              })}
            </div>
            
          </div>
          <div className='pokemon-moves'>
            <h4>Moves</h4>
            <div>
              {pokemon?.moves.map((move :any, index:any) => {
                return <div key={index} className="pokemon-move-item">{move.move.name}</div>
              })}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}
export default PokemonDetails
