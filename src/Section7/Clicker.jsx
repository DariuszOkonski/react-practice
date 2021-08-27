import React, { Component } from 'react'

class Clicker extends Component {
    NUMBER = 7
    constructor(props) {
        super(props);
        this.state = {
            number: 2
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let rand = Math.floor(Math.random() * 10);
        this.setState({
            number: rand
        })
    }

    render() { 
        return ( 
            <div>
                <h1>Number: {this.state.number}</h1>
                {
                    (this.state.number !== this.NUMBER) ?
                        <button onClick={this.handleClick}>Click Me</button> :
                        <h2>You Won</h2>
                }
            </div>
         );
    }
}
 
export default Clicker;