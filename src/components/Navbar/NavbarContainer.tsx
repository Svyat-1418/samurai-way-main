import React from "react";
import {InitialStateType} from "../../redux/sidebarReducer";
import {Navbar} from "./Navbar";
import {ReduxStoreType} from "../../redux/reduxStore";

type PropsType = {
   store: ReduxStoreType
}

export const NavbarContainer = (props: PropsType) => {
    const state: InitialStateType = props.store.getState().sidebar

    return <Navbar state={state}/>
}