import React from 'react'
import App from '../App'
import { default as HeaderComponent } from './header-component/index'

export default {
  title: 'Header',
  component: App,
}

const Template = (args) => <App {...args} />

export const Header = Template.bind({})
Header.args = {
  children: <HeaderComponent />,
}
