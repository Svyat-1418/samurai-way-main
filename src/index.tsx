import './index.css';
import reportWebVitals from './reportWebVitals';
import {AppRootStateType, store} from "./redux/reduxStore";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";

export const rerenderEntireTree = (state: AppRootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

//Redux когда уведомляет подписчиков не передаёт им  state
store.subscribe(() => {
    const state: AppRootStateType = store.getState()
    rerenderEntireTree(state)
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
