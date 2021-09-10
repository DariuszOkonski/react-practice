import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [isUserLogged, setIsUserLogged] = useState(false);
    
    const toggleLoggedState = () => {
        setIsUserLogged(prevValue => !prevValue);
    }
    return(
        <AppContext.Provider value={{ isUserLogged, toggleLoggedState }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;