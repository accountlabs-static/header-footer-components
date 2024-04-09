import React from "react";
import Format from "./Format";

export default function OKX({
  width = "24",
  height = "24",
  color = "var(--color-fg-emphasis)",
  ...args
}) {
  return (
    <Format {...args}>
      <svg
        fill="none"
        width={width}
        height={height}
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={color}>
          <path d="m6 6h9.7998v9.7998h-9.7998z" />
          <path d="m24.1992 6h9.7999v9.7998h-9.7999z" />
          <path d="m24.1992 24.1997h9.7999v9.7999h-9.7999z" />
          <path d="m6 24.1997h9.7998v9.7999h-9.7998z" />
          <path d="m15.8008 15.7998h8.3998v8.3999h-8.3998z" />
        </g>
      </svg>
    </Format>
  );
}
