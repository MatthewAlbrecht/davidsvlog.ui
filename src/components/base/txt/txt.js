import React, { Component } from 'react'
import { Link } from 'gatsby'
import tags from './tags.json'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class Txt extends Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    htmlFor: PropTypes.string,
    tag: PropTypes.oneOf(tags),
  }

  get classes() {
    return (
      this.props.classes &&
      this.props.classes.split(' ').map(className => `txt_${className}`)
    )
  }

  get sizeClasses() {
    return (
      this.props.size && this.props.size.split(' ').map(size => `txt_${size}`)
    )
  }

  get colorClasses() {
    return (
      this.props.color &&
      this.props.color.split(' ').map(color => `txt_color${color}`)
    )
  }

  get lineClasses() {
    return (
      this.props.line &&
      this.props.line.split(' ').map(line => `txt_line${line}`)
    )
  }

  get spaceClasses() {
    return (
      this.props.space &&
      this.props.space.split(' ').map(space => `txt_space${space}`)
    )
  }

  get alignmentClasses() {
    return (
      this.props.align &&
      this.props.align.split(' ').map(alignment => `txt_${alignment}`)
    )
  }

  get className() {
    const {
      uppercase,
      semibold,
      thin,
      bold,
      light,
      btn,
      strike,
      italic,
    } = this.props

    return classnames(
      btn ? 'btn' : 'txt',
      this.classes,
      this.sizeClasses,
      this.colorClasses,
      this.lineClasses,
      this.spaceClasses,
      this.alignmentClasses,
      this.props.className,
      { txt_italic: italic },
      { txt_uppercase: uppercase },
      { txt_thin: thin },
      { txt_light: light },
      { txt_semibold: semibold },
      { txt_bold: bold },
      { txt_strike: strike }
    )
  }

  render() {
    const { tag: Tag, to, href, content, htmlFor } = this.props

    if (Tag === 'Link') {
      return (
        <Link className={this.className} to={to}>
          {content || this.props.children}
        </Link>
      )
    }

    return (
      <Tag className={this.className} href={href} htmlFor={htmlFor}>
        {content || this.props.children}
      </Tag>
    )
  }
}
