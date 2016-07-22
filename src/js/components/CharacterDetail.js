'use strict'

import React from 'react'
import Close from './Close'
import u from './../utils'
import SpeciesList from './SpeciesList'
import VehicleList from './VehicleList'
import PlanetList from './PlanetList'
import FilmList from './FilmList'
import Loader from './Loader'

export default class CharacterDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { person: {}, loading: true }
    this.loadCharacterDetail()
  }
  loadCharacterDetail() {
    this.apiCall = u.get(this.props.params.url).then((body) => {
      this.setState({ person: body, loading: false })
    })
  }
  componentWillUnmount() {
    Promise.resolve(this.apiCall)
  }
  render() {
    const { person } = this.state
    return this.state.loading ? <Loader/> : (
      <section className="details">
        <div>
          <Close history={this.props.history} />
          <h1>{person.name}</h1>
          <div className="row">
            <p className="col-xs-3"><em>Birth:</em> {person.birth_year}</p>
            <p className="col-xs-3"><em>Gender:</em> {person.gender}</p>
            <p className="col-xs-3"><em>Height:</em> {person.Height}</p>
            <p className="col-xs-3"><em>Mass:</em> {person.mass}</p>
            <p className="col-xs-3"><em>Hair:</em> {person.hair_color}</p>
            <p className="col-xs-3"><em>Eye:</em> {person.eye_color}</p>
            <p className="col-xs-3"><em>Skin:</em> {person.skin_color}</p>
          </div>
        </div>
        <div>
          <h2>Species</h2>
          <SpeciesList species={person.species}/>
        </div>
        <div>
          <h2>Homeworld</h2>
          <PlanetList planets={[person.homeworld]}/>
        </div>
        <div>
          <h2>Vehicles</h2>
          <VehicleList vehicles={person.vehicles}/>
        </div>
        <div>
          <h2>Films</h2>
          <FilmList films={person.films}/>
        </div>
      </section>
    )
  }
}

CharacterDetail.propTypes = { params: React.PropTypes.object, history: React.PropTypes.object }
CharacterDetail.displayName = 'CharacterDetail'
