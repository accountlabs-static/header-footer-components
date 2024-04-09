import React from "react";
import Format from "./Format";

export default function Bnb({ width = "24", height = "24", ...args }) {
  return (
    <Format {...args}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18" cy="18" r="15" fill="#E7BB41" />
        <path
          d="M13.0566 18L11.038 20.0213L9 18L11.0373 15.9608L13.0566 18ZM17.9914 13.0605L21.4681 16.5405L23.5061 14.502L17.9914 9L12.4767 14.52L14.5147 16.5585L17.9914 13.0605ZM24.9455 15.9608L22.9262 18L24.9635 20.0393L27 18L24.9455 15.9608ZM17.9914 22.9395L14.5147 19.4415L12.4767 21.4808L17.9914 27L23.5061 21.48L21.4681 19.4415L17.9914 22.9395ZM20.0287 17.982L17.9914 15.9615L15.9541 18L17.9914 20.0213L20.0287 17.982Z"
          fill="white"
        />
      </svg>
    </Format>
  );
}
