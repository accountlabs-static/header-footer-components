import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'
import messages from './translations/en.json'
import './index.scss'
import 'react-tooltip/dist/react-tooltip.css'

function App({ children }) {
  return (
    <BrowserRouter>
      <IntlProvider locale="en" messages={messages}>
        {children}
      </IntlProvider>
    </BrowserRouter>
  )
}

export default App
