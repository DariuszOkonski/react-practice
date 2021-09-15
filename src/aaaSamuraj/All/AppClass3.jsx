import React, { useRef, createRef, useState, useEffect } from 'react';

const AppClass3 = () => {
    const [counter, setCounter] = useState(0)
    const textInputRef = useRef(true);
    const numberInputRef = createRef(true);

    const focusOnInput = () => {
        textInputRef.current.focus();
    }

    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    console.log(textInputRef.current)
    console.log(numberInputRef.current)

    useEffect(() => {
        textInputRef.current.focus();
    }, [])

    return ( 
        <div>
            <input 
                ref={textInputRef}
                type="text"
            />

            <input 
                ref={numberInputRef}
                type="number" 
            />

            <button onClick={focusOnInput}>Ustaw focus na input</button>
            <button onClick={increaseCounter}>Przerenderuj komponent: {counter}</button>
        </div>
     );
}
 
export default AppClass3;