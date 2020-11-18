export const addPokemon = (pokemon, pokemonToAdd, name) => {

  return [...pokemon, { ...pokemonToAdd, ownedName: name }];
};


export const removePokemon = (pokemons, nameToRemove) => {
  console.log(nameToRemove, 'name')

  return pokemons.filter(pokemon => pokemon.ownedName !== nameToRemove);
}