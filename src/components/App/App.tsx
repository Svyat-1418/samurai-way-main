import React from 'react';
import styles from './App.module.css';
import {Route} from "react-router-dom";
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import {UsersContainer} from "../Users/UsersContainer";

import {NavbarContainer} from "../Navbar/NavbarContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import HeaderContainer from '../Header/HeaderContainer';

const App = () => {
    return (
            <div className={styles.appWrapper}>
                <HeaderContainer />
                <NavbarContainer />
                <div className={styles.appContentWrapper}>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>
                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer /> }/>
                    <Route path='/users'
                           render={ () => <UsersContainer /> }/>


                </div>
            </div>
        )
}

export default App;