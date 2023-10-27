import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("black");
  
  function changecolor(name){
    setcolor(name);
  }

  return (
    <>
    <div className="w-full h-screen flex flex-col items-center justify-center" style={{backgroundColor: color}}>
      <h1 className="text-3xl text-blue-400 font-bold underline">BG Changer!</h1>
      <div className="flex gap-2 justify-evenly mt-5 ">
        <button className="bg-black rounded-md border-teal-500 border-2 text-white px-2" onClick={() => changecolor('black')}>Black</button>
        <button className="bg-red-600 rounded-md border-teal-500 border-2 text-white px-2" onClick={() => changecolor('red')}>Red</button>
        <button className="bg-gray-400 rounded-md border-teal-500 border-2 text-white px-2" onClick={() => changecolor('gray')}>Gray</button>
        <button className="bg-blue-600 rounded-md border-teal-500 border-2 text-white px-2" onClick={() => changecolor('blue')}>Blue</button>
        <button className="bg-yellow-400 rounded-md border-teal-500 border-2 text-white px-2" onClick={() => changecolor('yellow')}>Yellow</button>
        <button className="bg-orange-600 rounded-md border-teal-500 border-2 text-white px-2" onClick={() => changecolor('orange')}>Orange</button>
        <button className="bg-green-600 rounded-md border-teal-500 border-2 text-white px-2" onClick={() => changecolor('green')}>Green</button>
      </div>
    </div>
    </>
  )
}

export default App
