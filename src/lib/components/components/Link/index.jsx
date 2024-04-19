import React from 'react'
import propTypes from 'prop-types'
import ArrowRight from '../../assets/images/ArrowRight'
import ExitLink from '../../assets/images/ExitLink'
import { LinkWrapper } from './style'

export default function Link({ arrow = true, exit, to = '', children, blank, href, onClick, ...args }) {
  const hrefOrToArgs = href ? { as: 'a', href } : to ? { to } : { as: 'div' }
  const toArgs = {
    ...(!onClick ? hrefOrToArgs : { onClick, ...hrefOrToArgs }),
  }
  return (
    <LinkWrapper {...toArgs} {...args}>
      <span className="link-text">{children}</span>
      {arrow && (exit ? <ExitLink className="link-arrow" /> : <ArrowRight className="link-arrow" />)}
    </LinkWrapper>
  )
}

Link.propTypes = {
  arrow: propTypes.bool,
  exit: propTypes.bool,
  color: propTypes.string,
  hoverColor: propTypes.string,
  underline: propTypes.bool,
  href: propTypes.string,
  to: propTypes.string,
  blank: propTypes.bool,
}
