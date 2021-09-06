import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import {addPost, sendMessage, StateType, updateNewMessageText, updateNewPostText} from "./redux/state";

//addPost("JS")
//sendMessage("JS")

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     updateNewPostText={updateNewPostText}
                     updateNewMessageText={updateNewMessageText}
                     addPost={addPost}
                     sendMessage={sendMessage}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


