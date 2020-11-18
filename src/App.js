import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from 'components/layouts/header/Header';
import PokemonListPage from 'pages/pokemon-list-page/PokemonList';
import PokemonDetailPage from 'pages/pokemon-detail-page/PokemonDetail';
import MyPokemonPage from 'pages/my-pokemon-page/MyPokemon';

const pokemonList = props => {
  return <PokemonListPage {...props} />;
};

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' render={props => pokemonList(props)} />
        <Route path='/detail/:name' component={PokemonDetailPage} />
        <Route path='/my-pokemon' component={MyPokemonPage} />
      </Switch>
    </React.Fragment>
    
  );
}

export default App;
