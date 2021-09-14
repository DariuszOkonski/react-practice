import React, { Component } from 'react';
import { createRef } from 'react/cjs/react.development';

class Counter2 extends Component {
    state = {
        counter: 0
    }

    componentRef = createRef(true);
    
    asyncIncreaseCounterValue = () => {
        setTimeout(() => {
                console.log(this.componentRef);
                if(this.componentRef.current) {
                    this.setState(prevState => ({
                        counter: prevState.counter + 1
                    }))
                }
            }, 3000);
    }

    render() { 
        const {counter} = this.state;

        return (
            <div ref={this.componentRef}>
                <p>Wartość licznika wynosi: {counter}</p>
                
                <button onClick={this.asyncIncreaseCounterValue}>
                    Pobierz asynchroniczne dane
                    </button>
            </div>
        );
    }
}
 
export default Counter2;