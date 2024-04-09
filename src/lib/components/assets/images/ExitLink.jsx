import React from "react";
import Format from "./Format";

export default function ExitLink({
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
        <path d="M11.0031 3.5605L5.5478 9.01575L4.4873 7.95525L9.9418 2.5H5V1L12.5031 1V8.5H11.0031V3.5605Z" />
      </svg>
    </Format>
  );
}
