import React, { useEffect, useState } from 'react';
import './App.css';


const App = () => {  
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const handler = () => setCounter(prevState => prevState + 1);
  const toggleVisibilityCounter = () => setIsActive(prevValue => !prevValue);

  const counterComponent = isActive
    ? <Counter2 />
    : null;

  return (
    <div className="App">
      <button onClick={toggleVisibilityCounter}>
        Pokaż/ukryj komponent
      </button>

      {counterComponent}
    </div>
  
  );
}

const Counter2 = () => {
  const [counter, setCounter] = useState(0);
  
  const handleMouseMove = (event) => {
    setCounter(event.clientX)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])


  return (
    <div>
      <p>{counter}</p>
      {/* <p>{rerenderCounter}</p> */}
    </div>
  )
}

export default App;