import styled, { css } from 'styled-components';
import { DEVICE_QUERY_MOBILE } from '../../config';

export const Main = styled.div
  .withConfig({
    shouldForwardProp: (prop) =>
      !['mask'].includes(prop),
  })
  .attrs(({ theme }) => ({
    className: `modal theme-${theme}`,
  }))`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  align-items: ${props => (props.centered ? 'center' : 'flex-start')};
  padding: 10px 0;
  top: var(--height-header);
  left: 0;
  width: 100%;
  height: calc(100% - var(--height-header));
  z-index: 700;
  overflow: auto;
  background: ${props =>
    props.theme === 'light'
      ? 'var(--color-bg-default-trans)'
      : 'var(--color-bg-default-trans60)'};
  backdrop-filter: blur(6px);
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (!props.mask || !props.visible ? '0' : '1')};
  transition: var(--transition);
`;

export const Container = styled.div.attrs(({ theme }) => ({
  className: `modal-container theme-${theme}`,
}))`
  width: ${props => {
    const { width } = props;
    return typeof width === 'number' ? `${width}px` : width;
  }};

  background: var(--color-bg-muted);
  margin: ${props => (props.centered ? '0' : '10vh 0')};
  opacity: ${props => props.opacity || 1};

  ${props =>
    props.centered
      ? 'transform: translateY(calc(0px - var(--height-header)));'
      : ''}
  ${props => {
    const { height } = props;
    if (!height) return '';
    const heightValue = typeof height === 'number' ? `${height}px` : height;
    return `height: ${heightValue}`;
  }}

  ${props =>
    props.theme === 'light'
      ? css`
          background: white;
          box-shadow: 2px 4px 6px rgba(149, 149, 149, 0.2);
        `
      : css`
          border: 1px solid var(--color-border-subtle);
        `}

  ${props =>
    props.rounded
      ? css`
          border-radius: 12px;
        `
      : null}

  @media ${DEVICE_QUERY_MOBILE} {
    position: relative;
    margin: 0 24px;
  }
`;

export const Header = styled.div`
  width: 100%;
`;

export const Body = styled.div`
  width: 100%;
`;

export const Footer = styled.div`
  width: 100%;
`;

export const CloseIcon = styled.div.attrs({
  className: 'close-icon',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props =>
    props.theme === 'light'
      ? 'var(--color-bg-default)'
      : 'var(--color-border-subtle)'};
  position: absolute;
  right: ${props => ({ inner: 0, external: '-80px' }[props.type])};
  top: 0;
  cursor: pointer;
  ${({ theme, type }) =>
    theme === 'light'
      ? css`
          color: ${type !== 'inner'
            ? 'var(--color-fg-subtle)'
            : 'var(--color-fg-default)'};

          box-shadow: ${type !== 'inner'
            ? '2px 4px 6px rgba(149, 149, 149, 0.2)'
            : 0};

          ${type === 'inner'
            ? `
              top: 36px;
              right: 36px;
              z-index: 5;
            `
            : 0}
        `
      : css`
          color: var(--color-fg-muted);
        `}

  @media ${DEVICE_QUERY_MOBILE} {
    top: auto;
    left: calc(50% - 20px);
    right: auto;
    bottom: -65px;
    z-index: 10;
  }
`;
