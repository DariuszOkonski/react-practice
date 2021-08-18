import {Component} from 'react';

class Hello extends Component {
    state = {  }

    render() { 
        return (  
            <h2>Hi: {this.props.to} from: {this.props.from}</h2>
        );
    }
}
 
export default Hello;