'use strict'

import React from 'react'
import classNames from 'classnames'

export default class Section extends React.Component {
  render() {
    const sectionClasses = classNames('section', {
      hide: !(this.props.toggle)
    })
    return (
      <section className={sectionClasses}>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </section>
    )
  }
}

Section.propTypes = {
  toggle: React.PropTypes.number,
  title: React.PropTypes.string,
  children: React.PropTypes.object
}
Section.displayName = 'Section'
