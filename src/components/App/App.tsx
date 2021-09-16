import React from 'react';
import styles from './App.module.css';
import {Route} from "react-router-dom";
import {Header} from "../Header/Header";
import {News} from "../News/News";
import {Music} from "../Music/Music";
import {Settings} from '../Settings/Settings';
import {Profile} from "../Profile/Profile";
import {AddPostActionType, UpdateNewPostTextActionType} from "../../redux/profileReducer";
import {SendMessageActionType, UpdateNewMessageTextActionType } from '../../redux/dialogsReducer';
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import {NavbarContainer} from "../Navbar/NavbarContainer";

export type DispatchActionsType =
    AddPostActionType |
    UpdateNewPostTextActionType |
    SendMessageActionType |
    UpdateNewMessageTextActionType



const App = () => {
  return (
      <div className={styles.appWrapper}>
          <Header/>
          <NavbarContainer />
        <div className={styles.appContentWrapper}>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>

          <Route path="/profile"
                 render={() => <Profile/>}
          />
          <Route path="/dialogs"
                 render={() => <DialogsContainer />}
          />
        </div>
      </div>
  )
}

export default App;
