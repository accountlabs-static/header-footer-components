import styled, { css } from 'styled-components';

export const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Container = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  z-index: 2;
`;

export const PopoverContainer = styled.div.attrs({
  className: 'popover-card-container',
})`
  position: absolute;
  ${props =>
    ({
      top: css`
        bottom: 33px;
      `,
      bottom: css`
        top: 33px;
      `,
    }[props.placement])}
  margin: 0 auto;
  padding: 16px;
  min-width: 160px;
  max-width: 320px;
  background: var(--color-bg-default);
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
  transition: var(--transition);
`;
