import {Component} from "react";

class Machine extends Component {
    render() { 
        const {s1, s2, s3} = this.props;
        let result = s1 === s2 && s2 === s3 ? "You Won" : "You Loose";
        return ( 
            <div>
                <h1>{s1} {s2} {s3}</h1>
                <p>{result}</p>
            </div>
         );
    }
}
 
export default Machine;