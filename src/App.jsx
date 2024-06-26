import { useState } from 'react'
import './App.css'

function App() {

  const [onIcon, setOnIcon] = useState(true)
  const icon = "./icons/on.svg"
  const offIcon = './icons/off.svg'

  return (
    <>
      <h1>Hello</h1>
      
      <img src={onIcon ? icon : offIcon} alt="Icon" onClick={() => setOnIcon(!onIcon)} />
    </>
  )
}

export default App
