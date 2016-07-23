'use strict'

import React from 'react'
import Close from './Close'
import u from './../utils'
import CharacterList from './CharacterList'
import Section from './Section'
import Loader from './Loader'

export default class VehicleDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { vehicle: {}, loading: true }
    this.loadVehicleDetail()
  }
  loadVehicleDetail() {
    this.apiCall = u.get(this.props.params.url).then((body) => {
      this.setState({ vehicle: body, loading: false })
    })
  }
  componentWillUnmount() {
    Promise.resolve(this.apiCall)
  }
  render() {
    const { vehicle } = this.state
    return this.state.loading ? <Loader/> : (
      <section className="details">
        <div>
          <Close history={this.props.history} />
          <h1>{vehicle.name}</h1>
          <div className="row">
            <p className="col-xs-6"><em>Manufacturer:</em> {vehicle.manufacturer}</p>
            <p className="col-xs-6"><em>Model:</em> {vehicle.model}</p>
            <p className="col-xs-4"><em>Class:</em> {vehicle.vehicle_class}</p>
            <p className="col-xs-3"><em>Max Speed:</em> {vehicle.max_atmosphering_speed}</p>
            <p className="col-xs-3"><em>Cost:</em> {vehicle.cost_in_credits}</p>
            <p className="col-xs-3"><em>Capacity:</em> {vehicle.cargo_capacity}</p>
            <p className="col-xs-3"><em>Consumables:</em> {vehicle.consumables}</p>
            <p className="col-xs-3"><em>Passengers:</em> {vehicle.passengers}</p>
          </div>
        </div>
        <Section title="Pilots" toggle={vehicle.pilots.length}>
          <CharacterList characters={vehicle.pilots}/>
        </Section>
      </section>
    )
  }
}

VehicleDetail.propTypes = { params: React.PropTypes.object, history: React.PropTypes.object }
VehicleDetail.displayName = 'VehicleDetail'
