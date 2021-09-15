import React, { useState } from 'react'

const SUBRRACTION = "subtraction";
const ADDITION = "addition";
const RESET = "reset"

const startValue = 0;
const Counter = (props) => {

    const [count, setCount] = useState(startValue);
    const [result, setResult] = useState(0);

    const handleMathClick = (type, number = 1) => {
        setCount(count + 1);

        if(type === SUBRRACTION) {
            setResult(result - number)
        } else if(type === RESET) {
            setResult(props.result);
        } else if(type === ADDITION) {
            setResult(result + number);
        }
    }
    return ( 
        <React.Fragment>
            <MathButton name="-10" number={10} type={SUBRRACTION} click={handleMathClick} />
            <MathButton name="-1" number={1} type={SUBRRACTION} click={handleMathClick} />
            <MathButton name="Reset" type={RESET} click={handleMathClick} />
            <MathButton name="+1" number={1} type={ADDITION} click={handleMathClick} />
            <MathButton name="+10" number={10} type={ADDITION} click={handleMathClick} />

            <ResultPanel count={count} result={result} />
        </React.Fragment>
     );
}

const MathButton = ({click, name, number, type}) => {
    const handleOnClick = () => {
        click(type, number);
    }

    return (
        <button onClick={handleOnClick}>{name}</button>
    )
}

const ResultPanel = ({count, result}) => {
    const additionalInformation = count > 10 ? <span> .Przeciążenie procesora</span> : null;
    
    return(
        <React.Fragment>
            <h2>Liczby kliknięć: {count} {additionalInformation}</h2>
            <h2>Wynik: {result}</h2>
        </React.Fragment>
    )
}
 
export default Counter;