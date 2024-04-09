import styled from 'styled-components';
import { H6 } from '../../styles/title.style';
import { SpinKeyframes } from '../../styles/animate';

export const Btn = styled(H6)`
  appearance: none;
  height: 48px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  box-sizing: border-box;
  color: var(--color-fg-emphasis);
  border: 2px solid var(--color-border-default);
  background: transparent;
  cursor: pointer;
  transition: none;
  position: relative;
  .btn-icon-arrow {
    color: var(--color-fg-muted);
    transition: var(--transition);
    margin-right: -6px;
  }
  &.btn-primary {
    color: var(--color-fg-default);
    border-image: var(--color-gd-primary) 1;
    .btn-icon-arrow {
      color: var(--color-bd-contiguous);
    }
  }
  &.btn-disabled {
    color: var(--color-fg-slight);
    border-color: var(--color-border-subtle);
    .btn-icon-arrow {
      color: var(--color-fg-slight);
    }
  }
  &.btn-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    padding: 2px;
    border: none;
    --background-color: var(--color-bg-muted);
    --border-color: var(--color-border-subtle);
    --border-hover-color: var(--color-border-default);
    background-image: linear-gradient(
        var(--background-color),
        var(--background-color)
      ),
      linear-gradient(to right, var(--border-color), var(--border-color));
    background-clip: content-box, border-box;
    background-origin: border-box;
    transition: all 0.25s;
    .btn-icon-arrow {
      margin-right: -3px;
      color: var(--color-bd-pink);
    }
    &:hover {
      background-image: linear-gradient(
          var(--background-color),
          var(--background-color)
        ),
        linear-gradient(
          to right,
          var(--border-hover-color),
          var(--border-hover-color)
        );
      .btn-icon-arrow {
        transform: translateX(0);
        color: white;
      }
    }
    &:disabled,
    &:disabled:hover {
      color: var(--color-fg-slight);
      prevent-event: none;
      --border-color: var(--color-border-subtle);
      --border-hover-color: var(--color-border-subtle);
      .btn-icon-arrow {
        color: var(--color-fg-slight);
      }
    }
  }
  &.btn-rainbow {
    position: relative;
    display: inline-block;
    --border-bg: conic-gradient(#e0516e, #f3671f, #1cffad, #3e71ff, #e0516e);
    --border-size: 2px;
    --border-radius: 0;
    border: none;
    z-index: 0;
    overflow: hidden;
    border-radius: var(--border-radius);
    ::before {
      content: '';
      display: block;
      background: var(--border-bg);
      position: absolute;
      width: calc(100% * 1.41421356237);
      padding-bottom: calc(100% * 1.41421356237);
      animation: ${SpinKeyframes('translate(-50%, -50%)')} 5s linear infinite;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      z-index: -2;
    }
    ::after {
      content: '';
      position: absolute;
      top: var(--border-size);
      right: var(--border-size);
      bottom: var(--border-size);
      left: var(--border-size);
      background: #1d1e24;
      z-index: -1;
      border-radius: calc(var(--border-radius) - var(--border-size));
    }
  }
  &.btn-main {
    color: var(--color-bg-default);
    background: var(--color-bd-primary);
    border: 0;
    .btn-icon-arrow {
      color: var(--color-bg-default);
    }
  }
  &.btn-text {
    color: var(--color-bd-primary);
    border: 0;
    .btn-icon-arrow {
      color: var(--color-bd-primary);
    }
  }
  &.btn-pink {
    color: var(--color-fg-default);
    border-color: var(--color-bd-pink);
    .btn-icon-arrow {
      color: var(--color-bd-pink);
    }
  }
  &.btn-gd-pink {
    color: var(--color-fg-default);
    border-image: var(--color-gd-pink) 1;
    .btn-icon-arrow {
      color: var(--color-bd-pink);
    }
  }
  &.btn-gd-orange {
    color: var(--color-fg-default);
    border-image: var(--color-gd-orange) 1;
    .btn-icon-arrow {
      color: var(--color-bd-orange);
    }
  }
  &.btn-small {
    height: 40px;
    padding: 0 16px;
  }
  &.btn-mini {
    height: 32px;
    font-size: 14px;
    padding: 0 16px;
  }

  &.btn-ellipse {
    min-width: 80px;
    height: 80px;
    border-radius: 50%;
    color: var(--color-bd-pink);
    border-color: var(--color-border-subtle);
    &:hover {
      border-color: var(--color-border-default);
    }
    &:disabled,
    &:disabled:hover {
      color: var(--color-fg-slight);
      border-color: var(--color-border-subtle);
    }
    .btn-icon-arrow {
      margin-right: 0;
    }
  }

  &.btn-block {
    width: 100%;
  }

  > .loading-line {
    margin: 0 auto;
  }

  &:hover {
    .btn-icon-arrow {
      transform: translateX(6px);
    }
  }

  &:disabled {
    color: var(--color-fg-slight);
    border-image: var(--color-border-subtle) 1;
    cursor: not-allowed;
    .btn-icon-arrow {
      color: var(--color-fg-slight);
      transform: translateX(0);
    }
  }

  &.btn-main:disabled {
    color: var(--color-bg-default);
    background: var(--color-border-default);
    .btn-icon-arrow {
      color: var(--color-bg-default);
    }
  }
`;

export const MoveBox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
`;
