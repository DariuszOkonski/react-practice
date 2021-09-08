import React from 'react'
import { PureComponent } from 'react';
import { AppContext } from './AppContext';

class Button extends PureComponent {
    static contextType = AppContext;

    render() { 
        return (
            <button onClick={this.context.toggleLoggedState}>
                Przełącz stan użytkownika
            </button>
                        
        );
    }
}
 
export default Button;