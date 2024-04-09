import React from "react";
import Format from "./Format";

export default function Close({
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9998 13.0607L17.8334 18.8942L18.8941 17.8336L13.0605 12L18.8941 6.16642L17.8334 5.10576L11.9998 10.9393L6.16613 5.10565L5.10547 6.16631L10.9392 12L5.10547 17.8337L6.16613 18.8943L11.9998 13.0607Z"
        />
      </svg>
    </Format>
  );
}
