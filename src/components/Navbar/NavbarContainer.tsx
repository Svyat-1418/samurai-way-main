import React from "react";
import {InitialStateType} from "../../redux/sidebarReducer";
import {Navbar} from "./Navbar";
import {StoreContext} from "../../StoreContext";

export const NavbarContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state: InitialStateType = store.getState().sidebar
                return <Navbar state={state}/>
            }}
        </StoreContext.Consumer>
    )

}