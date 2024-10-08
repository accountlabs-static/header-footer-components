import React from 'react';
import Format from './Format';

export default function Check({
  width = '18',
  height = '18',
  color = 'currentColor',
  ...args
}) {
  return (
    <Format {...args}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 18 18"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.50005 11.379L14.3941 4.48425L15.4553 5.54475L7.50005 13.5L2.72705 8.727L3.78755 7.6665L7.50005 11.379Z" />
      </svg>
    </Format>
  );
}

