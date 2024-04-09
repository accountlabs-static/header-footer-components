import styled from 'styled-components';
import { DEVICE_QUERY_MOBILE } from '../config';

export const ContactButton = styled.div`
  margin-top: 140px;
  display: inline-block;
  button {
    color: white;
    border-color: var(--color-border-default);
  }
  button .right-arrow {
    color: var(
      ${props =>
        props.popoverIsOpen ? '--color-bd-pink' : '--color-fg-subtle'}
    );
    margin-left: 8px;
    transform: rotate(${props => (props.popoverIsOpen ? 270 : 90)}deg);
    transition: all 0.25s;
  }
  .popover-card-container {
    background: var(--color-bg-slight);
    .list-item {
      padding: 6px 8px;
      color: var(--color-fg-default);
    }
    overflow: initial;
    bottom: 55px;
    padding: 16px 16px 8px;
    &::after {
      position: relative;
      left: -14px;
      bottom: -16px;
      display: block;
      content: '';
      width: 0;
      height: 0;
      border: 6px solid var(--color-bg-muted);
      border-top-width: 8px;
      border-bottom: none;
      border-left-color: transparent;
      border-right-color: transparent;
      margin-left: 19px;
    }
  }
  @media ${DEVICE_QUERY_MOBILE} {
    margin-top: 40px;
  }
`;
