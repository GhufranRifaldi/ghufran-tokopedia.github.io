import pokemonTypes from './pokemon.types';
import { addPokemon, removePokemon } from 'utils';
const initialState = {
  isFetching: false,
  isFetchingSingle: false,
  pokemons: null,
  pokemonSingle: null,
  ownedPokemon: [],
  nextUrl: null,
  prevUrl: null,
  currentPage: 1
};

const pokemonReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case pokemonTypes.FETCH_POKEMONS_START:
      return {
        ...state,
        isFetching: true
      };
    case pokemonTypes.FETCH_POKEMON_START:
      return {
        ...state,
        isFetchingSingle: true
      };
    case pokemonTypes.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pokemons: payload.results,
        nextUrl: payload.next,
        prevUrl: payload.previous,
        total: payload.count
      };
    case pokemonTypes.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        isFetchingSingle: false,
        pokemonSingle: payload
      };
    case pokemonTypes.CATCH_POKEMON:
      return {
        ...state,
        ownedPokemon: addPokemon(
          state.ownedPokemon,
          action.payload,
          action.name
        )
      };
    case pokemonTypes.RELEASE_POKEMON:
      return {
        ...state,
        ownedPokemon: removePokemon(state.ownedPokemon, action.payload)
      };
    case pokemonTypes.RELEASE_ALL:
      return {
        ...state,
        ownedPokemon: []
      }
    default:
      return state;
  }
};

export default pokemonReducer;
