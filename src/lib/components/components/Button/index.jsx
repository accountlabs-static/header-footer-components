/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Btn, MoveBox } from './style';
import ArrowRight from '../../assets/images/ArrowRight';
import Loading from '../Loading';

function Button({
  className,
  type,
  size,
  ellipse,
  icon,
  arrow,
  block,
  tagName = 'button',
  loading,
  disabled,
  children,
  ...args
}) {
  const typeClass = type ? `btn-${type}` : '';
  const sizeClass = size ? `btn-${size}` : '';
  const ellipseClass = ellipse ? 'btn-ellipse' : '';

  const btnDom = useRef();

  const background = 'transparent';
  const blockClass = block ? 'btn-block' : '';

  const mouseMove = e => {
    const dom = e.currentTarget;
    const rect = dom.getBoundingClientRect();
    const xPer = (((e.clientX - rect.x) / rect.width) * 100).toFixed(2);
    const yPer = (((e.clientY - rect.y) / rect.height) * 100).toFixed(2);
    dom.style.background = `radial-gradient(34.46% 148.73% at ${xPer}% ${yPer}%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), ${background}`;
  };

  const mouseLeave = e => {
    e.currentTarget.style.background = background;
  };

  function renderIcon(arg) {
    return React.isValidElement(arg)
      ? React.cloneElement(arg, {
        className: 'btn-icon btn-left-icon',
        style: {
          marginRight: '8px',
        },
      })
      : React.createElement(arg, {
        className: 'btn-icon btn-left-icon',
        style: {
          marginRight: '8px',
        },
      });
  }

  return (
    <Btn
      ref={btnDom}
      as={tagName}
      className={`${typeClass} ${sizeClass} ${ellipseClass} ${blockClass} ${className}`}
      {...args}
      disabled={disabled || loading}
    >
      {loading ? (
        <Loading color="var(--color-fg-muted)" />
      ) : (
        <>
          {icon && renderIcon(icon)}
          {children}
          {arrow && <ArrowRight className="btn-icon-arrow" />}
          {ellipse && <ArrowRight width="24" height="24" />}
          {!disabled && (
            <MoveBox onMouseMove={mouseMove} onMouseLeave={mouseLeave} />
          )}
        </>
      )}
    </Btn>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf([
    'primary',
    'pink',
    'gd-pink',
    'gd-orange',
    'main',
    'text',
    'rainbow',
    'circle',
    'disabled',
  ]),
  size: PropTypes.oneOf(['mini', 'small', 'medium']),
  icon: PropTypes.any,
  arrow: PropTypes.bool,
  ellipse: PropTypes.bool,
  tagName: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
