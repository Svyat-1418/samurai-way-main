import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AllAppActionsType, AppRootStateType} from "../../redux/reduxStore";
import {
    followAC,
    unfollowAC,
    setUsersAC,
    UserType,
    InitialStateType,
    setTotalCountAC,
    setCurrentPageAC,
    setCurrentPortionAC,
    toggleIsFetchingAC
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

export type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    currentPage: number
    totalCount: number
    currentPortion: number
    isFetching: boolean
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    setCurrentPortion: (currentPortion: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalUsersCount,
        currentPortion: state.usersPage.currentPortion,
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AllAppActionsType>): MapDispatchToPropsType => {
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
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
        this.props.toggleIsFetching(true)
        axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.usersPage.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged}
                       setCurrentPortion={this.props.setCurrentPortion}
                       currentPortion={this.props.currentPortion}
                       pageSize={this.props.pageSize}
                       totalCount={this.props.totalCount}
                       currentPage={this.props.currentPage}
                />
            </>
        )
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);