import React from 'react';
import {ReduxStoreType, store} from "./redux/reduxStore";


export const StoreContext=React.createContext(store);

export type PropsType = {
    store: ReduxStoreType
    children:React.ReactNode
}
export const Provider=(props: PropsType)=>{//мы убрали props так как store из контехта 15cт.
    return(
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

