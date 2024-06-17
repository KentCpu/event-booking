import {createContext, useContext, useState} from 'react';
import {ADMIN_ROLE, GUEST_ROLE, ORGANIZER_ROLE, USER_ROLE} from "../const/role";

export const SessionContext = createContext({
    session: {
        id: null,
        role: ADMIN_ROLE,
    },
    setSession: null,
});

export const SessionProvider = ({children}) => {
    const [session, setSession] = useState( { id: null, role: ORGANIZER_ROLE});

    return (
        <SessionContext.Provider value={{session, setSession}}>
            {children}
        </SessionContext.Provider>
    );
}

export const useSession = () => {
    return useContext(SessionContext);
}
