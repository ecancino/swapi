'use strict'

import R from 'ramda'
import React from 'react'
import StarshipListItem from './StarshipListItem'

export default class StarshipList extends React.Component {
  render() {
    const starships = R.addIndex(R.map)((url, key) => {
      return <StarshipListItem key={key} url={url}/>
    }, this.props.starships || [])
    return (
      <ul className="row list list-starship between-xs">
        {starships}
      </ul>
    )
  }
}

StarshipList.propTypes = { starships: React.PropTypes.array }
StarshipList.displayName = 'CharacterList'
