import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { DEVICE_QUERY_MOBILE } from '../../config';

export const LinkWrapper = styled(Link)
  .attrs({
    className: 'link-wrapper',
  })
  .withConfig({
    shouldForwardProp: (prop) =>
      !['hoverColor'].includes(prop),
  })`
  color: ${props => props.color};
  .link-text {
    transition: var(--transition);
    cursor: pointer;
    @media ${DEVICE_QUERY_MOBILE} {
      & > span {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
  ${props =>
    props.underline
      ? css`
          .link-text {
            position: relative;
            background: ${props.color || 'var(--color-gd-primary)'};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            cursor: pointer;
            &::selection {
              background-clip: initial;
              -webkit-text-fill-color: initial;
            }
          }
          &::after {
            content: '';
            position: absolute;
            display: inline-block;
            left: 0;
            bottom: -2px;
            width: 0;
            height: 1px;
            background: ${props.color || 'var(--color-gd-primary)'};
            transition: width 0.25s ease-in-out;
          }

          &:hover {
            &::after {
              width: 100%;
            }
          }
        `
      : ''}

  .link-arrow {
    display: inline-flex;
    transition: var(--transition);
  }

  &:hover {
    color: ${props => props.hoverColor};
    .link-arrow {
      transform: translateX(6px);
    }
  }
`;
