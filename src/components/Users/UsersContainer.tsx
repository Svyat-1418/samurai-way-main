import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";
import {
    follow,
    unfollow,
    InitialStateType,
    setCurrentPortion,
    getUsers
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    currentPage: number
    totalCount: number
    currentPortion: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPortion: (currentPortion: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalUsersCount,
        currentPortion: state.usersPage.currentPortion,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

class UsersAPIComponent extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
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
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

export const UsersContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
    follow, unfollow, getUsers, setCurrentPortion}))(UsersAPIComponent)