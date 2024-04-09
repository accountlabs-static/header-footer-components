import { css, keyframes } from "styled-components";

export const FadeUp = css`
  visibility: hidden;
  transform: translateY(10px);
  opacity: 0;
  transition: var(--transition);
`;

export const FadeUpActive = css`
  visibility: visible;
  transform: translateY(0);
  opacity: 1;
`;

export const SpinKeyframes = transformProps => keyframes`
  from {
    transform: ${transformProps} rotate(0);
  }
  to {
    transform: ${transformProps} rotate(360deg);
  }
`;