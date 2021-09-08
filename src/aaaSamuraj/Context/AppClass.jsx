import React, { PureComponent } from 'react'
import { AppContext, defaultObject } from './AppContext';

import Button from './Button';
import UserInfo from './UserInfo';

class AppClass extends PureComponent {
    state = {
        isUserLogged: defaultObject.isUserLogged,
        isUserAdult: true,
    }
    
    handleToggleStateIsLogged = () => {
        this.setState(prevState => ({
            isUserLogged: !prevState.isUserLogged
        }));
    }

    handleIsUserAdult = () => {
        this.setState((prevState) => ({
            isUserAdult: !prevState.isUserAdult
        }))
    }

    render() { 
        return (
            <div>
                <AppContext.Provider value={{
                    isUserLogged: this.state.isUserLogged,
                    isUserAdult: this.state.isUserAdult,
                    toggleLoggedState: this.handleToggleStateIsLogged
                }}>
                    <UserInfo />
                    <Button />
                </AppContext.Provider>
                
                <AppContext.Provider value={{
                    isUserLogged: this.state.isUserAdult,
                    toggleLoggedState: this.handleIsUserAdult
                }}>
                    <UserInfo />
                    <Button />
                </AppContext.Provider>
            </div>
                
        );
    }
}
 
export default AppClass;