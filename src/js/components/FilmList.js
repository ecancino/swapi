'use strict'

import R from 'ramda'
import React from 'react'
import u from './../utils'
import FilmListItem from './FilmListItem'

export default class FilmList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { films: [] }
    this.loadFilms()
  }
  formatFilms(films) {
    const ordered = R.sortBy(R.prop('episode_id'), films)
    return R.map(film =>
        <FilmListItem key={film.episode_id} movie={film} />,
     ordered)
  }
  loadFilms() {
    this.apiCall = u.get(`${u.API_URL}/films`).then((body) => {
      this.setState({ films: this.formatFilms(body.results) })
    })
  }
  componentWillUnmount() {
    Promise.resolve(this.apiCall)
  }
  render() {
    return (
      <ul className="row list list-film between-xs">
        {this.state.films}
      </ul>
    )
  }
}

FilmList.displayName = 'FilmList'
