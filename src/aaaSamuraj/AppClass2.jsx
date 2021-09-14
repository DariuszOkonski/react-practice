import React, { createRef } from 'react'
import Counter2 from './Counter2';

class AppClass2 extends React.Component {
    state = {
        isCounterVisible: true,
    }

    paragraphElement = createRef();

    addChar = () => this.paragraphElement.current.innerText = "Hello";

    toggleVisibilityCounter = () => {
        this.setState(prevState => ({
            isCounterVisible: !prevState.isCounterVisible
        }))
    }

    render() {
        const counterElement = this.state.isCounterVisible ? <Counter2 /> : null; 

        return (
            <div>                           
                <p ref={this.paragraphElement}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque dolorem maxime quibusdam ea illo repellendus natus ex nisi. Quo fuga at placeat ratione quis perspiciatis cum dolor odio ducimus.
                </p>

                <button onClick={this.addChar}>Dodaj tekst</button>

                <button onClick={this.toggleVisibilityCounter}>Pokaż/Ukryj counter</button>    

                {counterElement}
            </div>
        );
    }
}
 
export default AppClass2;