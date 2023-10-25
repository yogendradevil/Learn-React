import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function add(){
    if(count < 20){
      setCount(count+1);
    }
  }
  function remove(){
    if(count >= 1){
      setCount(count-1);
    }
  }
  return (
    <>
    <h1>Counter</h1>
    <h2>Current Val: {count}</h2>
    <button onClick={add} >Add</button>
    <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
