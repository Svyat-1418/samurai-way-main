import React from 'react';
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
import axios from "axios";
import {Users} from "./Users";

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

type GetUsersResponseType = {
    error: string | null
    totalCount: number
    items: Array<UserType>
}

class UsersAPIComponent extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <Users users={this.props.usersPage.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      onPageChanged={this.onPageChanged}
                      setCurrentPortion={this.props.setCurrentPortion}
                      currentPortion={this.props.currentPortion}
                      pageSize={this.props.pageSize}
                      totalCount={this.props.totalCount}
                      currentPage={this.props.currentPage}
        />
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);