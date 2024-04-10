import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'
import 'react-tooltip/dist/react-tooltip.css'
import messages from '../../translations/en.json'
import { Header as HeaderComponent } from './index'
import '../../index.scss'

function Header() {
  return (
    <BrowserRouter>
      <IntlProvider locale="en" messages={messages}>
        <HeaderComponent />
      </IntlProvider>
    </BrowserRouter>
  )
}

export default Header
