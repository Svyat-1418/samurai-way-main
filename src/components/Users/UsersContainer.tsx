//import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {DispatchActionsType} from "../App/App";
import {AppRootStateType} from "../../redux/reduxStore";
import {
    followAC,
    unfollowAC,
    setUsersAC,
    UserType,
    InitialStateType,
    setTotalCountAC,
    setCurrentPageAC, setCurrentPortionAC
} from "../../redux/usersReducer";

export type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    currentPage: number
    totalCount: number
    currentPortion: number
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    setCurrentPortion: (currentPortion: number) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalUsersCount,
        currentPortion: state.usersPage.currentPortion
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
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setCurrentPortion: (currentPortion: number) => {
            dispatch(setCurrentPortionAC(currentPortion))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);