import React from "react";
import Format from "./Format";

export default function Eth({ width = "24", height = "24", ...args }) {
  return (
    <Format {...args}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18" cy="18" r="15" fill="#EBEFF8" />
        <path d="M12 18.1871L17.9988 21.8145V8L12 18.1871Z" fill="#828489" />
        <path
          d="M17.9988 8V21.8145L23.9952 18.1871L17.9988 8Z"
          fill="#303132"
        />
        <path
          d="M12 19.3503L17.9988 28.0001V22.9777L12 19.3503Z"
          fill="#828489"
        />
        <path
          d="M17.9988 22.9777V28.0001L23.9999 19.3503L17.9988 22.9777Z"
          fill="#303032"
        />
        <path
          d="M17.9988 15.3948L12 18.1871L17.9988 21.8145L23.9953 18.1871L17.9988 15.3948Z"
          fill="#353537"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.9952 18.1871L17.9988 15.3948L17.9988 15.3948V21.8145L23.9952 18.1871Z"
          fill="#141415"
        />
      </svg>
    </Format>
  );
}
