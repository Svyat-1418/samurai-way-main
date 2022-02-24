import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";
import {
    follow,
    unfollow,
    setUsers,
    UserType,
    InitialStateType,
    setTotalCount,
    setCurrentPage,
    setCurrentPortion,
    toggleIsFetching
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

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

class UsersAPIComponent extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(page, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items)
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

export const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setTotalCount, setCurrentPage, setCurrentPortion, toggleIsFetching
})(UsersAPIComponent);