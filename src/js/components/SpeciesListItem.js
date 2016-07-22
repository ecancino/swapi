'use strict'

import React from 'react'
import { Link } from 'react-router'
import u from './../utils'
import Loader from './Loader'

export default class SpeciesListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { species: {}, loading: true }
    this.loadSpecies()
  }
  loadSpecies() {
    this.apiCall = u.get(this.props.url).then((body) => {
      this.setState({ species: body, loading: false })
    })
  }
  componentWillUnmount() {
    Promise.resolve(this.apiCall)
  }
  render() {
    const { species } = this.state
    return this.state.loading ? <Loader/> : (
      <li>
        <Link to={`/species/${encodeURIComponent(species.url)}`} activeClassName="active">{species.name}</Link>
      </li>
    )
  }
}

SpeciesListItem.propTypes = { url: React.PropTypes.string }
SpeciesListItem.displayName = 'SpeciesListItem'
