import React from 'react'
import App from '../App'
import { Footer as FooterComponent } from './footer-component/index'

export default {
  title: 'Footer',
  component: App,
}

const Template = (args) => <App {...args} />

export const Footer = Template.bind({})
Footer.args = {
  children: <FooterComponent />,
}
