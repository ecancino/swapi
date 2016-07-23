'use strict'

import React from 'react'
import Close from './Close'
import u from './../utils'
import CharacterList from './CharacterList'
import Section from './Section'

export default class PlanetDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { planet: {}, loading: true }
    this.loadPlanetDetail()
  }
  loadPlanetDetail() {
    this.apiCall = u.get(this.props.params.url).then((body) => {
      this.setState({ planet: body, loading: false })
    })
  }
  componentWillUnmount() {
    Promise.resolve(this.apiCall)
  }
  render() {
    const { planet } = this.state
    return (
      <section className="details">
        <div>
          <Close history={this.props.history} />
          <h1>{planet.name}</h1>
          <div className="row">
            <p className="col-xs-9"><em>Terrain:</em> {planet.terrain}</p>
            <p className="col-xs-3"><em>Diameter:</em> {planet.diameter}</p>
            <p className="col-xs-6"><em>Climate:</em> {planet.climate}</p>
            <p className="col-xs-3"><em>Gravity:</em> {planet.gravity}</p>
            <p className="col-xs-3"><em>Water:</em> {planet.surface_water}</p>
            <p className="col-xs-3"><em>Orbit:</em> {planet.orbital_period}</p>
            <p className="col-xs-3"><em>Rotation:</em> {planet.rotation_period}</p>
          </div>
        </div>
        <Section title="Residents" toggle={planet.residents.length}>
          <CharacterList characters={planet.residents}/>
        </Section>
      </section>
    )
  }
}

PlanetDetail.propTypes = { params: React.PropTypes.object, history: React.PropTypes.object }
PlanetDetail.displayName = 'PlanetDetail'
