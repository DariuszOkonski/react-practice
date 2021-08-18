import {Component} from 'react';

class Hello extends Component {
    render() { 
        let bangs = "!".repeat(this.props.bangs ? this.props.bangs : 1)        

        return (  
            <div>
                <p>Hi: {this.props.to} from: {this.props.from}{bangs}</p>
                <img src={this.props.img} alt="" />
            </div>
        );
    }
}
 
export default Hello;