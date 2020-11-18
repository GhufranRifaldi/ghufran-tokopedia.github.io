import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import OwnedPokemon from 'components/owned-pokemon/OwnedPokemon';

const MyPokemon = () => {
  const { ownedPokemon } = useSelector(state => state.pokemon);
  useEffect(() => {
    console.log(ownedPokemon);
  }, [ownedPokemon]);
  return <div className="container"><div className="row"><OwnedPokemon data={ownedPokemon}></OwnedPokemon></div></div>;
};

export default MyPokemon;
