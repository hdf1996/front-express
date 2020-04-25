import { useEffect, useState } from 'react';
import Router from 'next/router';

const Index = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Router.query.id}`)
      .then(res => res.json())
      .then(body => setPokemon(body))
  }, [])

  if(pokemon === null) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div>
      <img src={pokemon.sprites.front_default} width="200" />
      <h2>{pokemon.name}</h2>
    </div>
  )
}

export default Index
