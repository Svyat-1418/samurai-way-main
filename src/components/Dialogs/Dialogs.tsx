import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {InitialStateType} from "../../redux/dialogsReducer";

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: () => void
    updateNewMessageText: (newText: string) => void
}

export const Dialogs = (props: PropsType) => {
    const sendMessageHandler = () => {
        props.sendMessage()
    }
    const updateNewMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={styles.dialogsPage}>
            <div className={styles.dialogsWrapper}>
                <h3 className={styles.title}>Dialogs</h3>
                {props.dialogsPage.dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>)}
            </div>

            <div className={styles.messagesWrapper}>
                <h3 className={styles.title}>Messages</h3>
                {props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}

                <div className={styles.sendMessageForm}>
                    <textarea placeholder="Write new message"
                              onChange={updateNewMessageTextHandler}
                              value={props.dialogsPage.newMessageText}
                    />
                    <div>
                        <button onClick={sendMessageHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
