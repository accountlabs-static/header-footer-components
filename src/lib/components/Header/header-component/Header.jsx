import { IntlProvider } from 'react-intl'
import 'react-tooltip/dist/react-tooltip.css'
import messages from '../../translations/en.json'
import { Header as HeaderComponent } from './index'
import '../../index.scss'

export function Header() {
  return (
    <IntlProvider locale="en" messages={messages}>
      <HeaderComponent />
    </IntlProvider>
  )
}
