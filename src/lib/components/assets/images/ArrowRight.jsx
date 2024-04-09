import React from 'react';
import Format from './Format';

export default function ArrowRight({
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
        <path d="M9.879 8.99956L6.1665 5.28706L7.227 4.22656L12 8.99956L7.227 13.7726L6.1665 12.7121L9.879 8.99956Z" />
      </svg>
    </Format>
  );
}
