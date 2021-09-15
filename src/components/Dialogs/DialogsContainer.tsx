import React from "react";
import {InitialStateType,
    sendMessageAC,
    updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {ReduxStoreType} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs";

type PropsType = {
    store: ReduxStoreType
}

export const DialogsContainer = (props: PropsType) => {
    const state: InitialStateType = props.store.getState().dialogsPage
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageTextChange = (newText: string) => {
        props.store.dispatch(updateNewMessageTextAC(newText))
    }

    return <Dialogs state={state}
                    sendMessage={onSendMessageClick}
                    updateNewMessageText={onNewMessageTextChange}
    />
}
