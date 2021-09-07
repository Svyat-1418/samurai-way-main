import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    addPost,
    sendMessage,
    state,
    StateType,
    subscribe,
    updateNewMessageText,
    updateNewPostText
} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";

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
rerenderEntireTree(state)
subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
