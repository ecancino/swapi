'use strict'

import React from 'react'
import Close from './Close'
import u from './../utils'
import CharacterList from './CharacterList'

export default class StarshipDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { starship: {}, loading: true }
    this.loadStarshipDetail()
  }
  loadStarshipDetail() {
    this.apiCall = u.get(this.props.params.url).then((body) => {
      this.setState({ starship: body, loading: false })
    })
  }
  componentWillUnmount() {
    Promise.resolve(this.apiCall)
  }
  render() {
    const { starship } = this.state
    return (
      <section className="details">
        <div>
          <Close history={this.props.history} />
          <h1>{starship.name}</h1>
          <div className="row">
            <p className="col-xs-9"><em>Manufacturer:</em> {starship.manufacturer}</p>
            <p className="col-xs-3"><em>Speed:</em> {starship.max_atmosphering_speed}</p>
            <p className="col-xs-9"><em>Model:</em> {starship.model}</p>
            <p className="col-xs-3"><em>Crew:</em> {starship.crew}</p>
            <p className="col-xs-6"><em>Class:</em> {starship.starship_class}</p>
            <p className="col-xs-6"><em>Consumables:</em> {starship.consumables}</p>
            <p className="col-xs-3"><em>MGLT:</em> {starship.MGLT}</p>
            <p className="col-xs-3"><em>Hyperdrive:</em> {starship.hyperdrive_rating}</p>
            <p className="col-xs-3"><em>Cost:</em> {starship.cost_in_credits}</p>
            <p className="col-xs-3"><em>Capacity:</em> {starship.cargo_capacity}</p>
            <p className="col-xs-3"><em>Passengers:</em> {starship.passengers}</p>
            <p className="col-xs-3"><em>Length:</em> {starship.length}</p>
          </div>
        </div>
        <div>
          <h2>Pilots</h2>
          <CharacterList characters={starship.pilots}/>
        </div>
      </section>
    )
  }
}

StarshipDetail.propTypes = { params: React.PropTypes.object, history: React.PropTypes.object }
StarshipDetail.displayName = 'StarshipDetail'
