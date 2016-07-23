'use strict'

import React from 'react'
import { Link } from 'react-router'
import u from './../utils'
import Loader from './Loader'

export default class StarshipListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { starship: {}, loading: true }
    this.loadStarship()
  }
  loadStarship() {
    this.apiCall = u.get(this.props.url).then((body) => {
      this.setState({ starship: body, loading: false })
    })
  }
  componentWillUnmount() {
    Promise.resolve(this.apiCall)
  }
  render() {
    const { starship } = this.state
    return this.state.loading ? <Loader/> : (
      <li>
        <Link to={`/starship/${encodeURIComponent(starship.url)}`} activeClassName="active">{starship.name}</Link>
      </li>
    )
  }
}

StarshipListItem.propTypes = { url: React.PropTypes.string }
StarshipListItem.displayName = 'StarshipListItem'
