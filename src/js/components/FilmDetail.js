'use strict'

import React from 'react'
import dateFormat from 'dateformat'
import u from './../utils'
import CharacterList from './CharacterList'
import PlanetList from './PlanetList'
import VehicleList from './VehicleList'
import StarshipList from './StarshipList'
import Section from './Section'
import Loader from './Loader'
import Close from './Close'

export default class FilmDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({ film: {}, loading: true })
    this.loadFilm(this.props.routeParams.url)
  }
  loadFilm(url) {
    this.apiCall = u.get(url).then((body) => {
      this.setState({ film: body, loading: false })
    })
  }
  componentWillReceiveProps(props) {
    this.state = ({ film: {}, loading: true })
    this.loadFilm(props.routeParams.url)
  }
  componentWillUnmount() {
    Promise.resolve(this.apiCall)
  }
  render() {
    const { film } = this.state
    return this.state.loading ? <Loader/> : (
      <section className="details">
        <Close history={this.props.history} />
        <h1>Episode {film.episode_id}: {film.title}</h1>
        <p>{film.opening_crawl}</p>
        <div className="row">
          <p className="col-xs-6"><em>Director:</em> {film.director}</p>
          <p className="col-xs-6 text-right"><em>Release Date:</em> {dateFormat(film.release_date, 'fullDate')}</p>
          <p className="col-xs-12"><em>Producer:</em> {film.producer}</p>
        </div>
        <Section title="Characters" toggle={film.characters.length}>
          <CharacterList characters={film.characters}/>
        </Section>
        <Section title="Planets" toggle={film.planets.length}>
          <PlanetList planets={film.planets}/>
        </Section>
        <Section title="Starships" toggle={film.starships.length}>
          <StarshipList starships={film.starships}/>
        </Section>
        <Section title="Vehicles" toggle={film.vehicles.length}>
          <VehicleList vehicles={film.vehicles}/>
        </Section>
      </section>
    )
  }
}

FilmDetail.propTypes = { routeParams: React.PropTypes.object, history: React.PropTypes.object }
FilmDetail.displayName = 'FilmDetail'
