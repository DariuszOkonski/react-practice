import React, { createRef } from 'react'

class AppClass2 extends React.Component {
    textInput = createRef();
    paragraphElement = createRef();

    focusTextInput = () => {
        this.textInput.current.focus();
    }

    addChar = () => this.paragraphElement.current.innerText = "Hello";

    render() {
        return (
            <div>
                <input
                    ref={this.textInput} 
                    type="text" 
                />
                <input type="number" />
                
                <p ref={this.paragraphElement}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque dolorem maxime quibusdam ea illo repellendus natus ex nisi. Quo fuga at placeat ratione quis perspiciatis cum dolor odio ducimus.
                </p>

                <button onClick={this.addChar}>Dodaj tekst</button>
                <button onClick={this.focusTextInput}>Ustaw focus na input</button>
            </div>
        );
    }
}
 
export default AppClass2;