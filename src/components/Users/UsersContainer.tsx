//import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {DispatchActionsType} from "../App/App";
import {AppRootStateType} from "../../redux/reduxStore";
import {followAC, unfollowAC, setUsersAC, UserType, InitialStateType} from "../../redux/usersReducer";

export type MapStateToPropsType = {
    usersPage: InitialStateType
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<DispatchActionsType>): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);