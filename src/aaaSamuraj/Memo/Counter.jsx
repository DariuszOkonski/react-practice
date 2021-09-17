import React from 'react'

const Counter = ({callback, index}) => {
    
    console.log(`render licznka nr: ${index}`);

    return ( 
        <div>
            <button onClick={callback}>Zwiększ licznik: {index}</button>
            {/* <p>Licznik nr: {index} wynosi: {counter}</p> */}
        </div>
     );
}
 
export default React.memo(Counter);