import React from "react";
import Format from "./Format";

export default function Drop({
  width = "16",
  height = "16",
  color = "currentColor",
  ...args
}) {
  return (
    <Format {...args}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.99975 8.78145L11.2997 5.48145L12.2424 6.42411L7.99975 10.6668L3.75708 6.42411L4.69975 5.48145L7.99975 8.78145Z" />
      </svg>
    </Format>
  );
}
