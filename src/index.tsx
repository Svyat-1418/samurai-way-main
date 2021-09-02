import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type LinkType = {
    id: number
    path: string
    linkLabel: string
}
export type FriendType = {
    id: number
    name: string
}

const posts: Array<PostType> = [
    {id: 1, message: "It is my first typescript project", likesCount: 12},
    {id: 2, message: "I like typescript", likesCount: 10},
    {id: 3, message: "I like ReactJS", likesCount: 10}
]
const dialogs: Array<DialogType> = [
    {id: 1, name: "Dmitri"},
    {id: 2, name: "Victoria"},
    {id: 3, name: "Igor"},
    {id: 4, name: "Sasha_IT-Patsan"},
    {id: 5, name: "Sveta"}
]
const messages: Array<MessageType> = [
    {id: 1, message: "How are you, Sasha?"},
    {id: 2, message: "Good. Are you?"},
    {id: 3, message: "Good"}
]
const links: Array<LinkType> = [
    {id: 1, path: "/profile", linkLabel: "Profile"},
    {id: 2, path: "/dialogs", linkLabel: "Dialogs"},
    {id: 3, path: "/news", linkLabel: "News"},
    {id: 4, path: "/music", linkLabel: "Music"},
    {id: 5, path: "/settings", linkLabel: "Settings"},
]

const friends: Array<FriendType> = [
    {id: 2, name: "Victoria"},
    {id: 3, name: "Igor"},
    {id: 4, name: "Sasha_IT-Patsan"}
]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App posts={posts}
             dialogs={dialogs}
             messages={messages}
             links={links}
             friends={friends}
        />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
