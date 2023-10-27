import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from '../components/card.jsx'
import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Card name = "Yogendra" age="21"/>
  </React.StrictMode>,
)
