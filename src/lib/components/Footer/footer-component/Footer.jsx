import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'
import 'react-tooltip/dist/react-tooltip.css'
import messages from '../../translations/en.json'
import { Footer as FooterComponent } from './index'
import '../../index.scss'

export function Footer() {
  return (
    <BrowserRouter>
      <IntlProvider locale="en" messages={messages}>
        <FooterComponent />
      </IntlProvider>
    </BrowserRouter>
  )
}
