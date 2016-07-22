'use strict'

import React from 'react'
import { Link } from 'react-router'

export default class FilmListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { movie } = this.props
    return (
      <li>
        <Link to={`/film/${encodeURIComponent(movie.url)}`} activeClassName="active">{movie.title}</Link>
      </li>
    )
  }
}

FilmListItem.propTypes = { movie: React.PropTypes.object }
FilmListItem.displayName = 'FilmListItem'
