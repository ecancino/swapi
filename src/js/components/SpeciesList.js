'use strict'

import R from 'ramda'
import React from 'react'
import SpeciesListItem from './SpeciesListItem'

export default class SpeciesList extends React.Component {
  render() {
    const species = R.addIndex(R.map)((url, key) => {
      return <SpeciesListItem key={key} url={url}/>
    }, this.props.species || [])
    return (
      <ul className="row list list-species between-xs">
        {species}
      </ul>
    )
  }
}

SpeciesList.propTypes = { species: React.PropTypes.array }
SpeciesList.displayName = 'SpeciesList'
