import React from 'react';
import Format from './Format';

export default function Mail({
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5 6C16.8807 6 18 4.88071 18 3.5C18 2.11929 16.8807 1 15.5 1C14.1193 1 13 2.11929 13 3.5C13 4.88071 14.1193 6 15.5 6ZM16.5 13.5V7.88849C16.1784 7.96147 15.8437 8 15.5 8C15.1563 8 14.8216 7.96147 14.5 7.88849V13.5H3.5V5.8149L8.32428 10.2372L9 10.8566L9.67572 10.2372L12.9671 7.22002C12.4109 6.84057 11.9442 6.33963 11.6051 5.75539L9 8.14343L5.02535 4.5H11.1115C11.0385 4.17839 11 3.84369 11 3.5C11 3.15631 11.0385 2.82161 11.1115 2.5H3.5H1.5V4.5V13.5V15.5H3.5H14.5H16.5V13.5Z"
        />
      </svg>
    </Format>
  );
}
