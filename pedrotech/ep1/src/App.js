import React from 'react'
import "./App.css"
import { useState } from 'react'

const App = () => {

  const [theexcuse, setTheexcuse] = useState('');
  
  const generateExcuse = (theme) => {
    fetch(`https://excuser-three.vercel.app/v1/excuse/${theme}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        const firstObject = data[0]
        const excuse = firstObject ? firstObject.excuse : "No excuse found"
        setTheexcuse(excuse)
      })
  }

  return (
    <div className="App">
      <h1> Generate An Excuse </h1>

      <button onClick={() => generateExcuse('party')}>party</button>
      <button onClick={() => generateExcuse('family')}>Family</button>
      <button onClick={() => generateExcuse('office')}>Office</button>


      <p>{theexcuse}</p>
    </div>
  )
}

export default App