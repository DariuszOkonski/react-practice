import React, { Component } from 'react'

class IconList extends Component {
    static defaultProps = {
        options: ['angry', 'anchor', 'archive', 'at', 'archway', 'baby', 'bell', 'bolt', 'bone', 'car', 'city', 'cloud', 'couch']
    }

    constructor(props) {
        super(props);
        this.state ={
            icons: []
        }
        this.addIcon = this.addIcon.bind(this);
    }

    addIcon() {
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        let icons = [...this.state.icons, newIcon]

        this.setState({
            icons
        })
    }

    render() { 
        const icons = this.state.icons.map(i => <i key={Math.random()} className={`fas fa-${i}`} />)

        return ( 
            <div>
                <h1>Icons: {icons}</h1>
                <button onClick={this.addIcon}>Add New Icon</button>
            </div>
         );
    }
}
 
export default IconList;