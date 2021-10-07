import React from 'react';
import styles from './App.module.css';
import {Header} from '../Header/Header';
import {Profile} from '../Profile/Profile';
import {Route} from "react-router-dom";
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import {UsersContainer} from "../Users/UsersContainer";
import {AddPostActionType, UpdateNewPostTextActionType} from "../../redux/profileReducer";
import {SendMessageActionType, UpdateNewMessageTextActionType} from "../../redux/dialogsReducer";
import {
    FollowActionType, SetCurrentPageActionType, SetCurrentPortionActionType,
    SetTotalUsersCountActionType,
    SetUsersActionType,
    UnfollowActionType
} from "../../redux/usersReducer";
import {NavbarContainer} from "../Navbar/NavbarContainer";

export type DispatchActionsType =
    AddPostActionType |
    UpdateNewPostTextActionType |
    SendMessageActionType |
    UpdateNewMessageTextActionType |
    FollowActionType |
    UnfollowActionType |
    SetUsersActionType |
    SetTotalUsersCountActionType |
    SetCurrentPageActionType |
    SetCurrentPortionActionType

const App = () => {
    return (
            <div className={styles.appWrapper}>
                <Header />
                <NavbarContainer />
                <div className={styles.appContentWrapper}>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>
                    <Route path='/profile'
                           render={ () => <Profile /> }/>
                    <Route path='/users'
                           render={ () => <UsersContainer /> }/>


                </div>
            </div>
        )
}

export default App;