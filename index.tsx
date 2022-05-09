import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './src/App'

const rootElement = document.getElementById('root') as HTMLDivElement

if (rootElement === null)
  throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
