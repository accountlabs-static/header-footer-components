import React from "react";
import Format from "./Format";

export default function ArrowWireRight({
  width = "18",
  height = "18",
  color = "currentColor",
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
        <path d="M12.129 8.25L8.106 4.227L9.1665 3.1665L15 9L9.1665 14.8335L8.106 13.773L12.129 9.75H3V8.25H12.129Z" />
      </svg>
    </Format>
  );
}
