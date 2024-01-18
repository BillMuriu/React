import React from 'react'

const App = () => {

  const age = 10;
  const isBlue = true;


  return (
    <div className='App'>
      { age === 19 ? <h1>Over age</h1> : <h1>Under age</h1>}
      <h1 style={{color: isBlue ? '#61dafb': 'green'}}>This is a color</h1>
      { isBlue && <button> This is a button</button>}
    </div>
    
  ) 
}

export default App
