import React from 'react'
import { PureComponent } from 'react';
import { AppContext } from './AppContext'

class UserInfo extends PureComponent {    
    static contextType = AppContext;

    render() { 
        return (
            <div>
                <p>
                    Użytkownik jest: 
                    {
                        this.context.isUserLogged 
                        ? ' zalogowany' 
                        : ' niezalogowany'
                    }
                </p>
            </div>
        )    
    }
}

 
export default UserInfo;