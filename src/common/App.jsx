import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Books</h1>
      <p>A simple app that makes a request to a backend!</p>
      <a href='/books'>Check it out!</a>
      
    </>
  )
}

export default App
