import pokemonTypes from './pokemon.types';
import config from 'config';
import axios from 'axios';

export const fetchPokemonsStart = () => ({
  type: pokemonTypes.FETCH_POKEMONS_START
});

export const fetchPokemonStart = () => ({
  type: pokemonTypes.FETCH_POKEMON_START
});

export const fetchPokemon = (url = null) => async dispatch => {
  dispatch(fetchPokemonsStart());

  try {
    let newUrl = url ? url : config.baseUrl
    const resp = await axios.get(newUrl);
    const { data } = resp;

    dispatch({
      type: pokemonTypes.FETCH_POKEMONS_SUCCESS,
      payload: data
    });
  } catch (error) { }
};

export const fetchPokemonDetail = name => async dispatch => {
  dispatch(fetchPokemonStart());
  try {
    const resp = await axios.get(`${config.baseUrl}/${name}`);
    const { data, status } = resp;
    if (status === 200) {
      dispatch({
        type: pokemonTypes.FETCH_POKEMON_SUCCESS,
        payload: data
      });
    }
  } catch (error) { }
};

export const catchPokemon = (item, name) => dispatch => {
  dispatch({ type: pokemonTypes.CATCH_POKEMON, payload: item, name: name });
};

export const releasePokemon = (name) => dispatch => {
  dispatch({ type: pokemonTypes.RELEASE_POKEMON, payload: name });
};
export const releaseAll = () => dispatch => {
  dispatch({ type: pokemonTypes.RELEASE_ALL });
};


