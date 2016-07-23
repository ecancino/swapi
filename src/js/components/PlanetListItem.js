'use strict'

import React from 'react'
import { Link } from 'react-router'
import u from './../utils'
import Loader from './Loader'

export default class PlanetListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { planet: {}, loading: true }
    this.loadPlanet()
  }
  loadPlanet() {
    this.apiCall = u.get(this.props.url).then((body) => {
      this.setState({ planet: body, loading: false })
    })
  }
  componentWillUnmount() {
    Promise.resolve(this.apiCall)
  }
  render() {
    const { planet } = this.state
    return this.state.loading ? <Loader/> : (
      <li>
        <Link to={`/planet/${encodeURIComponent(planet.url)}`} activeClassName="active">{planet.name}</Link>
      </li>
    )
  }
}

PlanetListItem.propTypes = { url: React.PropTypes.string }
PlanetListItem.displayName = 'PlanetListItem'
