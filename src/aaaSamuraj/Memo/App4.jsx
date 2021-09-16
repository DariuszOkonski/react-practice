import React, { useMemo, useState } from 'react'
import Counter from './Counter';

const App4 = () => {
    const [state, setState] = useState({x: 0, y: 0})
    const [firstCounter, setFirstCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0);

    const increaseFirstCounter = () => setFirstCounter(firstCounter + 1);
    const increaseSecondCounter = () => setSecondCounter(secondCounter + 1);

    const increaseX = () => setState({...state, x: state.x + 1});
    const increaseY = () => setState({...state, y: state.y + 1});

    const firstCounterComponent = useMemo(
        () => <Counter counter={state} index={1} />, [state.x])

    const secondCounterComponent = useMemo(
        () => <Counter counter={state} index={2} />, [state.y])

    return ( 
        <div>
            <p>Licznik nr 1: {state.x}</p>
            <p>Licznik nr 2: {state.y}</p>
            
            {firstCounterComponent}
            {secondCounterComponent}

            {/* <Counter counter={state} index={1} /> */}
            {/* <Counter counter={state} index={2} /> */}

            <button onClick={increaseX}>increase first</button>
            <button onClick={increaseY}>increase second</button>
        </div>
     );
}
 
export default App4;