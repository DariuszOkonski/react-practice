import React, { useState } from 'react'
import { AppContext, defaultObject } from './AppContext';

import Button from './Button';
import UserInfo from './UserInfo';

const AppClass = () => {    
    const [isUserLogged, setIsUserLogged] = useState(defaultObject.isUserLogged);
    const [isUserAdult, setIsUserAdult] = useState(true);
    

    const toggleLoggedState = () => setIsUserLogged(prevValue => !prevValue);

    const handleIsUserAdult = () => setIsUserAdult(prevValue => !prevValue);

    return (
        <div>
            <AppContext.Provider value={{
                isUserLogged, isUserAdult, toggleLoggedState
            }}>
                <UserInfo />
                <Button />
            </AppContext.Provider>
            
            <AppContext.Provider value={{
                isUserLogged: isUserAdult,
                toggleLoggedState: handleIsUserAdult
            }}>
                <UserInfo />
                <Button />
            </AppContext.Provider>
        </div>
            
    );
}
 
export default AppClass;