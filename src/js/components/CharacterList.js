'use strict'

import R from 'ramda'
import React from 'react'
import CharacterListItem from './CharacterListItem'

export default class CharacterList extends React.Component {
  render() {
    const characters = R.addIndex(R.map)((url, key) => {
      return <CharacterListItem key={key} url={url}/>
    }, this.props.characters || [])
    return (
      <ul className="row list list-character between-xs">
        {characters}
      </ul>
    )
  }
}

CharacterList.propTypes = { characters: React.PropTypes.array }
CharacterList.displayName = 'CharacterList'
