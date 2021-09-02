import React from "react";
import styles from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

export const Dialogs: React.FC = () => {

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

    return (
        <div className={styles.dialogsPage}>
            <div className={styles.dialogsWrapper}>
                <h3 className={styles.title}>Dialogs</h3>
                {dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>)}
            </div>

            <div className={styles.messagesWrapper}>
                <h3 className={styles.title}>Messages</h3>
                {messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}

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
