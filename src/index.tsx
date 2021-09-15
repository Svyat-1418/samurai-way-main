import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/reduxStore";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";
import {Provider} from "./StoreContext";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

//Redux когда уведомляет подписчиков не передаёт им  state
store.subscribe(() => {
    rerenderEntireTree()
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
