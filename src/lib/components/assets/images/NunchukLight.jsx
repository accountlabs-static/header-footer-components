import React from 'react'
import Format from './Format'

export default function NunchukLight({ width = '24', height = '24', ...args }) {
  return (
    <Format {...args}>
      <svg fill="none" width={width} height={height} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M29.7156 11L21.4538 19.3286C21.2127 19.5726 20.7853 19.393 20.7872 19.0486V15.2154H15.771C15.5587 15.2154 15.3814 15.0361 15.3822 14.822V11H10.5798L1.5 20.1826L6.27598 25L14.4697 16.74C14.7111 16.4984 15.1357 16.6771 15.1349 17.02V20.9162H20.2206C20.4332 20.9162 20.6109 21.0953 20.6109 21.3096V24.993H25.4133L34.5 15.8132L29.7156 11Z"
          fill={args.color || '#F5F8FF'}
        />
      </svg>
    </Format>
  )
}
