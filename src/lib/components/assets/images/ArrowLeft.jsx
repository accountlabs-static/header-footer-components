import React from "react";
import Format from "./Format";

export default function ArrowLeft({
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
        stroke={color}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 5L9 12L16 19" strokeWidth="1.5" />
      </svg>
    </Format>
  );
}
