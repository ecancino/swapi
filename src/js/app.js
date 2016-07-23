'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, createMemoryHistory } from 'react-router'
import App from './components/App'
import FilmList from './components/FilmList'
import FilmDetail from './components/FilmDetail'
import PlanetDetail from './components/PlanetDetail'
import VehicleDetail from './components/VehicleDetail'
import SpeciesDetail from './components/SpeciesDetail'
import CharacterDetail from './components/CharacterDetail'
import StarshipDetail from './components/StarshipDetail'

console.log('React', React)

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('./service-worker.js', { scope: './' })
//     .then(() => console.debug('◕‿◕'))
//     .catch((err) => console.error('ಠ_ಠ', err));
// }

ReactDOM.render((
  <Router history={createMemoryHistory({ queryKey: false })}>
    <Route path="/" component={App}>
      <IndexRoute component={FilmList}/>
      <Route path="/film/:url" component={FilmDetail}/>
      <Route path="/planet/:url" component={PlanetDetail}/>
      <Route path="/vehicle/:url" component={VehicleDetail}/>
      <Route path="/species/:url" component={SpeciesDetail}/>
      <Route path="/character/:url" component={CharacterDetail}/>
      <Route path="/starship/:url" component={StarshipDetail}/>
    </Route>
  </Router>
), document.querySelector('#app'))
