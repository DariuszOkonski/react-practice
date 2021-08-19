import {Component} from "react";

class Machine extends Component {
    render() { 
        const {s1, s2, s3} = this.props;
        let isWinner = (s1 === s2) && (s2 === s3);
        let par = {
            background: 'red',
            color: 'yellow',
            fontSize: '3rem'
        }
        return ( 
            <div className="Machine">
                <p style={par}>{s1} {s2} {s3}</p>
                <p>{isWinner ? "Winner!" : "Looser!"}</p>
            </div>
         );
    }
}
 
export default Machine;