import React, {createContext, useContext, useState} from 'react'

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [condition, setCondition] = useState(false);
    
    const open = () => {
        setCondition(true);
    }

    const close = () => {
        setCondition(false);
    }

    return <AppContext.Provider value={{
        condition,
        open,
        close
    }}>{children}</AppContext.Provider>
}

// creating custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider as default, useGlobalContext};