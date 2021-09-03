
import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [text, setText] = useState('')

  const handleOnClick = () => {
    const letter = 'a';
    setText(text + letter);
  }

  return (
    <div className="App">
      <button onClick={handleOnClick}>Dodaj "A"</button>
      <h1>{text}</h1>
    </div>
  );
}

export default App;