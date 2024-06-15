import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Items from './Items'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Items/>
    </>
  )
}

export default App
