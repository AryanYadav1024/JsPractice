import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  // reactElement
)
