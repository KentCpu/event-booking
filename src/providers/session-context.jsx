import {createContext, useContext, useState} from 'react';
import {GUEST_ROLE} from "../const/role";

export const SessionContext = createContext({
    session: {
        id: null,
        role: GUEST_ROLE,
    },
    setSession: null,
});

export const SessionProvider = ({children}) => {
    const [session, setSession] = useState( { id: null, role: GUEST_ROLE});

    return (
        <SessionContext.Provider value={{session, setSession}}>
            {children}
        </SessionContext.Provider>
    );
}

export const useSession = () => {
    return useContext(SessionContext);
}
