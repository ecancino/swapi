'use strict'

import R from 'ramda'
import React from 'react'
import VehicleListItem from './VehicleListItem'

export default class VehicleList extends React.Component {
  render() {
    const vehicles = R.addIndex(R.map)((url, key) => {
      return <VehicleListItem key={key} url={url}/>
    }, this.props.vehicles || [])
    return (
      <ul className="row list list-vehicle between-xs">
        {vehicles}
      </ul>
    )
  }
}

VehicleList.propTypes = { vehicles: React.PropTypes.array }
VehicleList.displayName = 'VehicleList'
