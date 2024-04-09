import React from "react";
import Format from "./Format";

export default function Matic({ width = "24", height = "24", ...args }) {
  return (
    <Format {...args}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.664062"
          y="0.666992"
          width="26.6667"
          height="26.6667"
          rx="13.3333"
          fill="#7950DD"
        />
        <path
          d="M17.8539 11.4042C17.5423 11.2168 17.1372 11.2168 16.7945 11.4042L14.364 12.8413L12.7125 13.7786L10.282 15.2158C9.9704 15.4033 9.5653 15.4033 9.22253 15.2158L7.2906 14.0911C6.979 13.9036 6.76087 13.56 6.76087 13.185V10.9668C6.76087 10.5919 6.94783 10.2482 7.2906 10.0608L9.19138 8.96728C9.50298 8.77983 9.90804 8.77983 10.2508 8.96728L12.1516 10.0608C12.4632 10.2482 12.6813 10.5919 12.6813 10.9668V12.404L14.3328 11.4355V9.99829C14.3328 9.62338 14.1459 9.27971 13.8031 9.09226L10.282 7.03024C9.9704 6.84278 9.5653 6.84278 9.22253 7.03024L5.6391 9.09226C5.29634 9.27971 5.10938 9.62338 5.10938 9.99829V14.1536C5.10938 14.5285 5.29634 14.8721 5.6391 15.0596L9.22253 17.1216C9.53414 17.3091 9.93924 17.3091 10.282 17.1216L12.7125 15.7157L14.364 14.7472L16.7945 13.3413C17.1061 13.1538 17.5112 13.1538 17.8539 13.3413L19.7547 14.4348C20.0663 14.6222 20.2845 14.9659 20.2845 15.3408V17.559C20.2845 17.9339 20.0975 18.2776 19.7547 18.465L17.8539 19.5898C17.5423 19.7772 17.1372 19.7772 16.7945 19.5898L14.8937 18.4963C14.5821 18.3088 14.364 17.9652 14.364 17.5902V16.1531L12.7125 17.1216V18.5588C12.7125 18.9337 12.8994 19.2773 13.2422 19.4648L16.8257 21.5268C17.1372 21.7143 17.5423 21.7143 17.8851 21.5268L21.4686 19.4648C21.7801 19.2773 21.9983 18.9337 21.9983 18.5588V14.4035C21.9983 14.0286 21.8113 13.6849 21.4686 13.4975L17.8539 11.4042Z"
          fill="white"
        />
      </svg>
    </Format>
  );
}
