import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PokemonListItem = ({ data, history, match, ...props }) => {
  const { name } = data;
  const { ownedPokemon } = useSelector(state => state.pokemon);

  let total =
    ownedPokemon.length > 0 
      ? ownedPokemon.filter(pokemon => {
        return pokemon.name === name ? true : false;
      })
      : 0;
  total = total.length > 0 ? total.length : "Tidak Ada";


  const redirectToDetail = () => {
    history.push(`/detail/${name}`);
  };

  

  return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div {...props} onClick={() => redirectToDetail()}>
            <div className="card">
                <div className="card-header">
                  <h5 className="text-center">{name.toUpperCase()}</h5>
                </div>
                <div className="card-body mx-auto">
                  < img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} width="150" height="150" alt="${name}" loading="lazy"/>
                </div>
                <div className="card-footer text-center">
                  List Saya : {total+" Pokemon"} 
                </div>
            </div>
        </div>
      </div>
  );
};

export default withRouter(PokemonListItem);

