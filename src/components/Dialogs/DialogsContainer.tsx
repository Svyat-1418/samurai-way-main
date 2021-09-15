import React from "react";
import {InitialStateType,
    sendMessageAC,
    updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store => {
                const state: InitialStateType = store.getState().dialogsPage
                const onSendMessageClick = () => {
                    store.dispatch(sendMessageAC())
                }
                const onNewMessageTextChange = (newText: string) => {
                    store.dispatch(updateNewMessageTextAC(newText))
                }
                return <Dialogs state={state}
                                sendMessage={onSendMessageClick}
                                updateNewMessageText={onNewMessageTextChange}
                />
            })
        }
    </StoreContext.Consumer>
}
