import React, { Component } from 'react';

class Friend extends Component {
    static defaultProps = {
        name: "John",
        hobbies: ['none']
    }

    render() { 
        const { name, hobbies } = this.props;
        return ( 
            <div>
                <h1>{name}</h1>
                <ul>
                    {
                        hobbies.map(h => <li key={h}>{h}</li>)
                    }
                </ul>
            </div>
         );
    }
}
 
export default Friend;