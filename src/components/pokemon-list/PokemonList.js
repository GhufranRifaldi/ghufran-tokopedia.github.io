import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PokemonListItem from './PokemonListItem';

import { fetchPokemon } from 'redux/pokemon/pokemon.action';
const PokemonList = () => {
  const { pokemons, nextUrl, prevUrl, isFetching } = useSelector(state => state.pokemon);
  const dispatch = useDispatch();
  
  return (
    <React.Fragment>
      {!isFetching && pokemons ?
        pokemons.map(pokemon => (
          <PokemonListItem data={pokemon} key={pokemon.name} />
        )) : null}

          <div>
            <div className="btn-group btn-group-toggle fixed-bottom" data-toggle="buttons">
              <a type="button" class="btn btn-light btn-sm" onClick={() => dispatch(fetchPokemon(prevUrl))}>Prev</a>
              <a type="button" class="btn btn-light btn-sm" href="/">List Pokemon</a>
              <a type="button" class="btn btn-light btn-sm" href="/my-pokemon">My Pokemon</a>
              <a type="button" class="btn btn-light btn-sm" onClick={() => dispatch(fetchPokemon(nextUrl))}>Next</a>
            </div>
          </div>

    </React.Fragment>
  );
};

export default PokemonList;
