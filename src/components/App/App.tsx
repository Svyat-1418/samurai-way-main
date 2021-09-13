import React from 'react';
import styles from './App.module.css';
import {Route} from "react-router-dom";
import {Header} from "../Header/Header";
import {Navbar} from "../Navbar/Navbar";
import {News} from "../News/News";
import {Music} from "../Music/Music";
import {Settings} from '../Settings/Settings';
import {Dialogs} from "../Dialogs/Dialogs";
import {Profile} from "../Profile/Profile";
import {AppRootStateType} from "../../redux/reduxStore";
import {AddPostActionType, UpdateNewPostTextActionType} from "../../redux/profileReducer";
import {SendMessageActionType, UpdateNewMessageTextActionType } from '../../redux/dialogsReducer';

export type DispatchActionsType =
    AddPostActionType |
    UpdateNewPostTextActionType |
    SendMessageActionType |
    UpdateNewMessageTextActionType


type PropsType = {
    state: AppRootStateType
    dispatch: (action: DispatchActionsType) => void
}

const App = (props: PropsType) => {
  return (
      <div className={styles.appWrapper}>
          <Header/>
          <Navbar state={props.state.sidebar}/>
        <div className={styles.appContentWrapper}>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>

          <Route path="/profile"
                 render={() => <Profile
                     state={props.state.profilePage}
                     dispatch={props.dispatch}
                 />}
          />
          <Route path="/dialogs"
                 render={() => <Dialogs
                     state={props.state.dialogsPage}
                     dispatch={props.dispatch}
                 />}
          />
        </div>
      </div>
  )
}

export default App;
