//import React from "react";
import {InitialStateType} from "../../redux/sidebarReducer";
import {Navbar} from "./Navbar";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";

type MapStateToPropsType = {
    sidebar: InitialStateType
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        sidebar: state.sidebar
    }
}
export const NavbarContainer = connect(mapStateToProps, () => {}) (Navbar)
