import React from 'react'
import Format from './Format'

export default function Cro({ width = '24', height = '24', ...args }) {
  return (
    <Format {...args}>
      <svg width={width} height={height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" fill="none" />
        <circle cx="18" cy="18" r="15" fill="#203064" />
        <path
          d="M17.8247 9.07141L10.1431 13.5068V22.3745L17.8247 26.8069L25.5003 22.3745V13.5068L17.8247 9.07141ZM23.2262 21.0605L17.8247 24.1789L12.4202 21.0605V14.8177L17.8247 11.6993L23.2262 14.8177V21.0605Z"
          fill="white"
        />
        <path
          d="M21.4067 20.011L17.8215 22.0801L14.2334 20.011V15.87L17.8215 13.798L21.4067 15.87L19.9143 16.7321L17.8215 15.5222L15.7287 16.7321V19.146L17.8215 20.3559L19.9143 19.146L21.4067 20.011Z"
          fill="white"
        />
      </svg>
    </Format>
  )
}
