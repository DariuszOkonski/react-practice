import React, { PureComponent } from 'react'
import { AppContext, defaultObject } from './AppContext';

import Button from './Button';
import UserInfo from './UserInfo';

class AppClass extends PureComponent {
    state = {
        isUserLogged: defaultObject.isUserLogged
    }
    
    handleToggleStateIsLogged = () => {
        this.setState(prevState => ({
            isUserLogged: !prevState.isUserLogged
        }));
    }

    render() { 
        return (
            <div>
                <AppContext.Provider value={{
                    isUserLogged: this.state.isUserLogged,
                    toggleLoggedState: this.handleToggleStateIsLogged 
                }}>
                    <UserInfo />
                    <Button />
                </AppContext.Provider>
            </div>
                
        );
    }
}
 
export default AppClass;