import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {
    ActionsType,
    AddPostActionType,
    DialogsPageType,
    SendMessageActionType,
    UpdateNewMessageTextActionType
} from "../../redux/state";

type PropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsType) => void
}

export const Dialogs = (props: PropsType) => {
    const sendMessageHandler = () => {
        const action: SendMessageActionType = {type: "SEND-MESSAGE"}
        props.dispatch(action)
    }
    const updateNewMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        const action: UpdateNewMessageTextActionType =
            {type:"UPDATE-NEW-MESSAGE-TEXT" as const, newText: text};
        props.dispatch(action)
    }

    return (
        <div className={styles.dialogsPage}>
            <div className={styles.dialogsWrapper}>
                <h3 className={styles.title}>Dialogs</h3>
                {props.state.dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>)}
            </div>

            <div className={styles.messagesWrapper}>
                <h3 className={styles.title}>Messages</h3>
                {props.state.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}

                <div className={styles.sendMessageForm}>
                    <textarea placeholder="Write new message"
                              onChange={updateNewMessageTextHandler}
                              value={props.state.newMessageText}
                    />
                    <div>
                        <button onClick={sendMessageHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
