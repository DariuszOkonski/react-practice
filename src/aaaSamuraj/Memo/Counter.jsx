import React from 'react'

const Counter = ({index, counter}) => {
    
    console.log(`render licznika nr: ${index}`);
    return ( 
        <div>
            <p>Licznik nr: {index} wynosi: {counter}</p>
        </div>
     );
}
 
export default React.memo(Counter);