'use strict'

import R from 'ramda'
import React from 'react'
import PlanetListItem from './PlanetListItem'

export default class PlanetList extends React.Component {
  render() {
    const planets = R.addIndex(R.map)((url, key) => {
      return <PlanetListItem key={key} url={url}/>
    }, this.props.planets || [])
    return (
      <ul className="row list list-planets between-xs">
        {planets}
      </ul>
    )
  }
}

PlanetList.propTypes = { planets: React.PropTypes.array }
PlanetList.displayName = 'CharacterList'
