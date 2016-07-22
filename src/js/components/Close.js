'use strict'

import React from 'react'

export default class Close extends React.Component {
  render() {
    const { goBack } = this.props.history
    return (
      <a onClick={goBack} className="close">
        <strong>X</strong>
      </a>
    )
  }
}

Close.propTypes = { history: React.PropTypes.object }
Close.displayName = 'Close'
