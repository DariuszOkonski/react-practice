import { createContext } from "react";

export const defaultObject = {
    isUserLogged: false,
    isUserAdult: true,
    toggleLoggedState: () => {}
}

export const AppContext = createContext(defaultObject);