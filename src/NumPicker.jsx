import {Component} from "react";

function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends Component {
    state = {  }
    
    
    render() { 
        const num = getNum();
        let msg;
        if(num === 7) {
            msg = 
                <div>
                    <h2>Congrats, You Win!</h2>
                    <img src="https://i.giphy.com/media/nXx0jZrbnbRxS/giphy.webp" />
                </div> 
        } else {
            msg = <p>Sorry, You Lose!</p>
        }

        return ( 
            <div>
                <h1>Your number is: {num}</h1>
                {msg}
            </div>
         );
    }
}
 
export default NumPicker;