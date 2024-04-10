import { IntlProvider } from 'react-intl'
import 'react-tooltip/dist/react-tooltip.css'
import messages from '../../translations/en.json'
import { Footer as FooterComponent } from './index'
import '../../index.scss'

export function Footer() {
  return (
    <IntlProvider locale="en" messages={messages}>
      <FooterComponent />
    </IntlProvider>
  )
}
