import React from 'react'
import { PureComponent } from 'react';
import { AppContext } from './AppContext'

class UserInfo extends PureComponent {    

    render() { 
        return (
            <AppContext.Consumer>
            {
                ({isUserLogged, toggleLoggedState}) => (
                    <div>
                        <p>
                            Użytkownik jest: 
                            {
                                isUserLogged 
                                ? ' zalogowany' 
                                : ' niezalogowany'
                            }
                        </p>
                    </div>
                )    
            }
            </AppContext.Consumer>
        );
    }
}
 
export default UserInfo;