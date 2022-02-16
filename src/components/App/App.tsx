import React from 'react';
import styles from './App.module.css';
import {Header} from '../Header/Header';
import {Route} from "react-router-dom";
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import {UsersContainer} from "../Users/UsersContainer";

import {NavbarContainer} from "../Navbar/NavbarContainer";
import ProfileContainer from "../Profile/ProfileContainer";

const App = () => {
    return (
            <div className={styles.appWrapper}>
                <Header />
                <NavbarContainer />
                <div className={styles.appContentWrapper}>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>
                    <Route path='/profile'
                           render={ () => <ProfileContainer /> }/>
                    <Route path='/users'
                           render={ () => <UsersContainer /> }/>


                </div>
            </div>
        )
}

export default App;