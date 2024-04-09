import React from "react";
import Format from "./Format";

export default function Menu({
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
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 17.5V19H6V17.5H18ZM20 11.25V12.75H4V11.25H20ZM18 5V6.5H6V5H18Z" />
      </svg>
    </Format>
  );
}
