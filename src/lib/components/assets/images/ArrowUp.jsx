import React from 'react';
import Format from './Format';

export default function ArrowUp({
  width = '24',
  height = '24',
  color = 'currentColor',
  ...args
}) {
  return (
    <Format {...args}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        stroke={color}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.5 15L12 9.5L17.5 15" strokeWidth="1.5" />
      </svg>
    </Format>
  );
}