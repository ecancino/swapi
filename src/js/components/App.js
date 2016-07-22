'use strict'

import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <article>
        <header><img src="star-wars.jpg" /></header>
        <hr />
        <section id="section">
          {this.props.children}
        </section>
        <hr />
      </article>
    )
  }
}

App.propTypes = { children: React.PropTypes.object }
App.displayName = 'App'
