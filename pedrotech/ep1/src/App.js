import React from 'react'
import "./App.css"
import { useState, useEffect } from 'react'

const App = () => {

  const [catFact, setCatFact] = useState("")

  const changeFact = () => {
    fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact);
      })
  }

  useEffect(() => {
    changeFact();
  }, [])

  return (
    <div className="App">
      <button onClick={changeFact}> Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  )
}

export default App