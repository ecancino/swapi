'use strict'

import React from 'react'
import { Link } from 'react-router'
import u from './../utils'
import Loader from './Loader'

export default class VehicleListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { vehicle: {}, loading: true }
    this.loadVehicle()
  }
  loadVehicle() {
    this.apiCall = u.get(this.props.url).then((body) => {
      this.setState({ vehicle: body, loading: false })
    })
  }
  componentWillUnmount() {
    Promise.resolve(this.apiCall)
  }
  render() {
    const { vehicle } = this.state
    return this.state.loading ? <Loader/> : (
      <li>
        <Link to={`/vehicle/${encodeURIComponent(vehicle.url)}`} activeClassName="active">{vehicle.name}</Link>
      </li>
    )
  }
}

VehicleListItem.propTypes = { url: React.PropTypes.string }
VehicleListItem.displayName = 'VehicleListItem'
