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

const App = () => {
  return (
      <div className={styles.appWrapper}>
          <Header/>
          <Navbar/>
        <div className={styles.appContentWrapper}>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/profile" component={Profile}/>

            {/*<Route path='/profile/span' component={Profile}/>
                    span Route ignore and show Profile*/}
            {/*<Route exact path='/profile' component={Profile}/>
                    when used exact path and URL has other symbols (symbols, which
                     has not value of exact path) or / , Route dose not show Profile*/}

            <Route path="/dialogs" component={Dialogs}/>
        </div>
      </div>
  )
}

export default App;
