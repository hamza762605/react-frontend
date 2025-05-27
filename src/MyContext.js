import React, {createContext,useState} from "react";

export const Context = createContext();

const MyContext = ({children}) => {
    const [user, setUser] = useState(
        {
            name:'Ali',
            loggedIn:false
        }
    )
    return(
        <Context.Provider value={{ user,setUser }}>
            {children}
        </Context.Provider>
    )
}

export default MyContext;