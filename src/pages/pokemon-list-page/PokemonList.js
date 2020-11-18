import React, { useEffect } from 'react';

import PokemonList from 'components/pokemon-list/PokemonList';
import { fetchPokemon } from 'redux/pokemon/pokemon.action';

import { useDispatch } from 'react-redux';

const PokemonListPage = () => {
  const dispatch = useDispatch();
  // const { pokemons } = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon());
  });
  return (
    <div className="container">
      <div className="row">
        <PokemonList></PokemonList>
      </div>
    </div>
      
  );
};

export default PokemonListPage;
