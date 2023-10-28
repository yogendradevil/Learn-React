import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  let generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(num){
      str += "0123456789";
    }
    if(char){
      str += "`~!@#$%^&*";
    }

    for(let i = 0; i <= length; i++){
      let ch  = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(ch);
    }
    setPassword(pass);

  }, [length, num, char, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, num, char, generatePassword])

  let passwordRef = useRef(null);

  let copyPass = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
    <div className='w-full max-w-lg mx-auto shadow-md bg-gray-700 text-orange-600 rounded-lg px-4 my-10'>
      <h1 className="text-3xl text-white text-center my-3">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden my-4'>
        <input 
        type="text" 
        value={password} 
        className='outline-none w-full p-3'
        placeholder='password'
        ref={passwordRef}
        readOnly/>
        <button className='p-3 bg-blue-700 text-white' onClick={copyPass}>Copy</button>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          className=' cursor-pointer'
          min={8}
          max={50}
          value={length}
          onChange={(e) => {
            setLength(e.target.value)
          }} />
          <label>Lenght:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          id="numIn"
          defaultChecked = {num}
          onChange={() => {
            setNum((prev) => !prev);
          }} />
          <label htmlFor="numIn">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          id="charIn"
          defaultChecked = {char}
          onChange={() => {
            setChar((prev) => !prev);
          }} />
          <label htmlFor="charIn">Special Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
