import React from "react";
import styles from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../index";

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export const Dialogs = (props: PropsType) => {
    return (
        <div className={styles.dialogsPage}>
            <div className={styles.dialogsWrapper}>
                <h3 className={styles.title}>Dialogs</h3>
                {props.dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>)}
            </div>

            <div className={styles.messagesWrapper}>
                <h3 className={styles.title}>Messages</h3>
                {props.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}

                <div className={styles.sendMessageForm}>
                    <textarea placeholder="Write new message"/>
                    <div>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
