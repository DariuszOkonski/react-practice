import React, { useMemo, useState } from 'react'
import Counter from './Counter';

const App4 = () => {
    const [firstCounter, setFirstCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0);

    const increaseFirstCounter = () => setFirstCounter(firstCounter + 1);
    const increaseSecondCounter = () => setSecondCounter(secondCounter + 1);

    const firstCounterComponent = useMemo(
        () => <Counter counter={firstCounter} index={1} />, [firstCounter])

    const secondCounterComponent = useMemo(
        () => <Counter counter={secondCounter} index={2} />, [secondCounter])

    return ( 
        <div>
            <p>Licznik nr 1: {firstCounter}</p>
            <p>Licznik nr 2: {secondCounter}</p>
            
            {/* {firstCounterComponent} */}
            {/* {secondCounterComponent} */}
            
            <Counter counter={firstCounter} index={1} />
            <Counter counter={secondCounter} index={2} />

            <button onClick={increaseFirstCounter}>increase first</button>
            <button onClick={increaseSecondCounter}>increase second</button>
        </div>
     );
}
 
export default App4;