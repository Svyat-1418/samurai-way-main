import React from "react";
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
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
                <Dialog id={dialogs[0].id} name={dialogs[0].name}/>
                <Dialog id={dialogs[1].id} name={dialogs[1].name}/>
                <Dialog id={dialogs[2].id} name={dialogs[2].name}/>
                <Dialog id={dialogs[3].id} name={dialogs[3].name}/>
                <Dialog id={dialogs[4].id} name={dialogs[4].name}/>
            </div>

            <div className={styles.messagesWrapper}>
                <Message id={messages[0].id} message={messages[0].message}/>
                <Message id={messages[1].id} message={messages[1].message}/>
                <Message id={messages[2].id} message={messages[2].message}/>


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
