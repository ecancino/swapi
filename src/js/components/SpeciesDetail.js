'use strict'

import React from 'react'
import Close from './Close'
import u from './../utils'
import CharacterList from './CharacterList'
import PlanetList from './PlanetList'
import FilmList from './FilmList'
import Loader from './Loader'

export default class SpeciesDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { species: {}, loading: true }
    this.loadSpeciesDetail()
  }
  loadSpeciesDetail() {
    this.apiCall = u.get(this.props.params.url).then((body) => {
      this.setState({ species: body, loading: false })
    })
  }
  componentWillUnmount() {
    Promise.resolve(this.apiCall)
  }
  render() {
    const { species } = this.state
    return this.state.loading ? <Loader/> : (
      <section className="details">
        <div>
          <Close history={this.props.history} />
          <h1>{species.name}</h1>
          <div className="row">
            <p className="col-xs-6"><em>Designation:</em> {species.designation}</p>
            <p className="col-xs-6"><em>Classification:</em> {species.classification}</p>
            <p className="col-xs-6"><em>Language:</em> {species.language}</p>
            <p className="col-xs-3"><em>Avg. Lifespan:</em> {species.average_lifespan}</p>
            <p className="col-xs-3"><em>Avg. Height:</em> {species.average_height}</p>
            <p className="col-xs-12"><em>Eye:</em> {species.eye_colors}</p>
            <p className="col-xs-12"><em>Hair:</em> {species.hair_colors}</p>
            <p className="col-xs-12"><em>Skin:</em> {species.skin_colors}</p>
          </div>
        </div>
        <div>
          <h2>People</h2>
          <CharacterList characters={species.people}/>
        </div>
        <div>
          <h2>Homeworld</h2>
          <PlanetList planets={[species.homeworld]}/>
        </div>
        <div>
          <h2>Films</h2>
          <FilmList films={species.films}/>
        </div>
      </section>
    )
  }
}

SpeciesDetail.propTypes = { params: React.PropTypes.object, history: React.PropTypes.object }
SpeciesDetail.displayName = 'SpeciesDetail'
