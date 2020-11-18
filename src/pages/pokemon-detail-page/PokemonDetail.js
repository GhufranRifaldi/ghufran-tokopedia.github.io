import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonDetail, catchPokemon } from 'redux/pokemon/pokemon.action';

const PokemonDetail = ({ match, history }) => {
  const { name } = match.params;
  const { pokemonSingle, ownedPokemon } = useSelector(
    state => state.pokemon
  );

  const [state, setState] = useState({
    isCatch: false,
    open: false,
    message: `Opsssssssss. Coba Lagi Bos!`
  });

  const [pokeName, setForm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonDetail(name));
    console.log(pokemonSingle);
  }, [name, dispatch]);

  const handlerCatch = () => {



    let isNameExist = ownedPokemon.length > 0 ? ownedPokemon.filter(name => name.ownedName === pokeName) : false;
    if (isNameExist.length > 0) {
      alert('Coba Nama Lain!');
      return;
    }

    dispatch(catchPokemon(pokemonSingle, pokeName));

    history.push('/my-pokemon');
  };

  const handleChange = event => {
    setForm(event.target.value);
  };

  const throwPokeBall = () => {
    const getRandomInt = max => {
      return Math.floor(Math.random() * Math.floor(max));
    };
    
    setState({ ...state, open: true, isCatch: false });
    if (getRandomInt(2) === 1) {
      setState({
        ...state,
        isCatch: true,
        open: false,
      });
    }
    setTimeout(() => {
       setState({ ...state, open: false });
     }, 10000);
  };

  //Hitung Mundur
  return (
    <div className="container">
      <div className="col text-center">
        <div className="card">
        {pokemonSingle && (
          <React.Fragment>

            <div className="card-header">
              {pokemonSingle.name.toUpperCase()}
            </div>

            <div className="card-body">
                <div className="col">
                  <div className="float-left">
                  < img src={pokemonSingle.sprites.front_default} width="120" height="120" alt="" loading="lazy"/> 
                  </div>
                  <div className="float-right">
                  < img src={pokemonSingle.sprites.back_default} width="120" height="120" alt="" loading="lazy"/>
                  </div>
                </div>
                <div className="col" > 
                  <div type="button" onClick={() => throwPokeBall()}>< img src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif" width="90" height="90" alt="" loading="lazy"/> Tangkap!</div> 
                </div>
            </div>
            {state.isCatch ? (
              <React.Fragment>
                <div type="alert" msg={`Excellent Throw! ${pokemonSingle.name} was caught!`} />
                <div>Cepat Tangkap!</div>
                <input className="m-2 border-1"
                  placeholder='Nama Pokemonmu?'
                  name='pokeName'
                  onChange={e => handleChange(e)}
                />
                <div type="button" className="bg-success border border-primary rounded m-2" onClick={handlerCatch}>Tangkap!</div>
              </React.Fragment>
            ) : (
                <React.Fragment>
            <div className="card-header">
              Detail
            </div>
                <div className="card-body">
                  <div className="float-left">
                    <div>
                        {pokemonSingle.stats.map(stat => (
                          <div key={stat.stat.name}>{stat.stat.name}
                          </div>
                        ))}
                    </div>
                    <div>
                        {pokemonSingle.types.map(slot => (
                        <div key={slot}> 
                          {"Types "+slot.slot}
                        </div>
                      ))}
                    </div>
                    <div>
                        Weight
                    </div>
                    <div>
                        Height
                    </div>
                  </div>

                  <div className="float-right">
                    <div>
                        {pokemonSingle.stats.map(base_stat => (
                          <div key={base_stat}>
                            {base_stat.base_stat}
                          </div>
                        ))}
                    </div>
                    <div>
                        {pokemonSingle.types.map(type => (
                        <div key={type.type.name}>
                          {type.type.name}
                        </div>
                      ))}
                    </div>
                    <div>
                        {pokemonSingle.weight}
                    </div>
                    <div>
                        {pokemonSingle.height}
                    </div>
                  </div>
                </div>
            
            <div className="card-header">
                Move
            </div>
            <div className="card-body">
                  <div>
                    {pokemonSingle.moves.map(move => (
                      <div key={move.move.name}>
                        {move.move.name}
                      </div>
                    ))}
                  </div>
            </div>
                </React.Fragment>
              )}
           
            {state.open && alert(state.message)}

            <div>
            <div className="btn-group btn-group-toggle fixed-bottom" data-toggle="buttons">
              <a type="button" class="btn btn-light btn-sm" >Prev</a>
              <a type="button" class="btn btn-light btn-sm" href="/">List Pokemon</a>
              <a type="button" class="btn btn-light btn-sm" href="/my-pokemon">My Pokemon</a>
              <a type="button" class="btn btn-light btn-sm" >Next</a>
            </div>
          </div>

          </React.Fragment>
          
        )}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
