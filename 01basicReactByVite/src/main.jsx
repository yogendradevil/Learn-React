import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Yo from './Yo.jsx'

function Yo(){
  return (
    <>
      <h1>Yo tag!</h1>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <App />
  <Yo />
  </>
)
