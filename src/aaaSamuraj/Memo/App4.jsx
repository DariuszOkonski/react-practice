import React, { useCallback, useState } from 'react'
import Counter from './Counter';

const App4 = () => {
    const [firstCounter, setFirstCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0);

    const increaseFirstCounter =  useCallback(() => setFirstCounter(prevValue => prevValue + 1), [])
    const increaseSecondCounter = useCallback(() => setSecondCounter(prevValue => prevValue + 1), []);

    // const increaseX = () => setState({...state, x: state.x + 1});
    // const increaseY = () => setState({...state, y: state.y + 1});

    const firstCounterComponent = <Counter callback={increaseFirstCounter} index={1} />;

    const secondCounterComponent = <Counter callback={increaseSecondCounter} index={2} />;

    return ( 
        <div>
            <p>Licznik nr 1: {firstCounter}</p>
            <p>Licznik nr 2: {secondCounter}</p>
            
            {firstCounterComponent}
            {secondCounterComponent}

            {/* <Counter counter={state} index={1} /> */}
            {/* <Counter counter={state} index={2} /> */}

            {/* <button onClick={increaseFirstCounter}>increase first</button> */}
            {/* <button onClick={increaseSecondCounter}>increase second</button> */}
        </div>
     );
}
 
export default App4;