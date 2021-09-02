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
import {DialogType, FriendType, LinkType, MessageType, PostType} from "../../index";

type PropsType = {
    posts: Array<PostType>
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    links: Array<LinkType>
    friends: Array<FriendType>
}

const App = (props: PropsType) => {
  return (
      <div className={styles.appWrapper}>
          <Header/>
          <Navbar links={props.links} friends={props.friends}/>
        <div className={styles.appContentWrapper}>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>

          <Route path="/profile" render={() => <Profile
              posts={props.posts}/>}
          />
          <Route path="/dialogs" render={() => <Dialogs
              dialogs={props.dialogs}
              messages={props.messages}/>}
          />
        </div>
      </div>
  )
}

export default App;
