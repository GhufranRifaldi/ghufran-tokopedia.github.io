import React from 'react';

import { useDispatch } from 'react-redux';
import { releasePokemon, releaseAll } from 'redux/pokemon/pokemon.action';

const OwnedPokemon = ({ data }) => {
  const dispatch = useDispatch();
  return (
        <React.Fragment>
        {data.length > 0 && <a className="container button text-center bg-danger p-2 m-3" onClick={() => dispatch(releaseAll())}>Hapus Semua List Pokemon!</a>}
        {data.length > 0 ? data.map(pokemon => {
        console.log(data);
          return (
              <div className="col-md-3 col-sm-6 mb-5">
                <div>
                  <div className="card" key={pokemon.ownedName}>
                    <div className="card-header text-center">
                        {pokemon.ownedName.toUpperCase()}
                    </div>
                      <div className="card-body text-center">
                        < img src={pokemon.sprites.front_default} width="150" height="150" alt="" loading="lazy"/>
                        <div>Nama Pokemon: {pokemon.name}</div>
                      </div>
                        <div className="card-footer bg-danger text-center" onClick={() => dispatch(releasePokemon(pokemon.ownedName))}>
                        Hapus
                    </div>
                  </div>
                </div>
              </div>
          );
        }) : <div className="text-center container bg-danger">Opss Belum Ada Pokemon Yang Ditangkap!</div>}
                  <div>
            <div className="btn-group btn-group-toggle fixed-bottom" data-toggle="buttons">
              <a type="button" class="btn btn-light btn-sm" >Prev</a>
              <a type="button" class="btn btn-light btn-sm" href="/">List Pokemon</a>
              <a type="button" class="btn btn-light btn-sm" href="/my-pokemon">My Pokemon</a>
              <a type="button" class="btn btn-light btn-sm" >Next</a>
            </div>
          </div>
        </React.Fragment>
            
    
  );
};

export default OwnedPokemon;
