import React, { Component } from 'react'

class Demo extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    
    render() { 
        return ( 
            <h1>Demo Component</h1>
         );
    }
}
 
export default Demo;