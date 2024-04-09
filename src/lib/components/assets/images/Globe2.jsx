import React from 'react';
import Format from './Format';

export default function Globe({
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
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <circle
          cx="11.9999"
          cy="11.9997"
          r="9.66667"
          stroke={color}
          strokeWidth="2"
        />
        <path
          d="M3 12H21M11.5 3C11.5 3 9 7 9 12C9 17 11.5 21 11.5 21M12.5 3C12.5 3 15 7 15 12C15 17 12.5 21 12.5 21"
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    </Format>
  );
}