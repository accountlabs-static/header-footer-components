import React from "react";
import Format from "./Format";

export default function CartBag({
  width = "24",
  height = "24",
  color = "currentColor",
  ...args
}) {
  return (
    <Format {...args}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4.75"
          y="6.75"
          width="14.5"
          height="13.5"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 6H16C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6H9.5C9.5 4.61929 10.6193 3.5 12 3.5C13.3807 3.5 14.5 4.61929 14.5 6ZM16 9H14.5C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9H8C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9Z"
          fill={color}
        />
      </svg>
    </Format>
  );
}
