import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { I18n } from './config'
import './index.css'

const init = async () => {
  I18n.init()
}

init().then(() => {
  const rootElement = document.getElementById('root')
  const root = rootElement && ReactDOM.createRoot(rootElement)
  root?.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
