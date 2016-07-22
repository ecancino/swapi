'use strict'

import React from 'react'
import { Link } from 'react-router'
import u from './../utils'
import Loader from './Loader'

export default class CharacterListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { person: {}, loading: true }
    this.loadCharacter()
  }
  loadCharacter() {
    this.apiCall = u.get(this.props.url).then((body) => {
      this.setState({ person: body, loading: false })
    })
  }
  componentWillUnmount() {
    Promise.resolve(this.apiCall)
  }
  render() {
    const { person } = this.state
    return this.state.loading ? <Loader/> : (
      <li>
        <Link to={`/character/${encodeURIComponent(person.url)}`} activeClassName="active">{person.name}</Link>
      </li>
    )
  }
}

CharacterListItem.propTypes = { url: React.PropTypes.string }
CharacterListItem.displayName = 'CharacterListItem'
