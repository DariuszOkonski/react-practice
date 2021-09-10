import React, { useState } from 'react'
import { AppContext, defaultObject } from './AppContext';

import Button from './Button';
import UserInfo from './UserInfo';

const AppClass = () => {    
    const [isUserLogged, setIsUserLogged] = useState(defaultObject.isUserLogged);
    const [isUserAdult, setIsUserAdult] = useState(true);
    

    const handleToggleStateIsLogged = () => setIsUserLogged(!isUserLogged);

    const handleIsUserAdult = () => setIsUserAdult(!isUserAdult);

    return (
        <div>
            <AppContext.Provider value={{
                isUserLogged: isUserLogged,
                isUserAdult: isUserAdult,
                toggleLoggedState: handleToggleStateIsLogged
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