import React from "react";
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs: React.FC = () => {
    return (
        <div className={styles.dialogsPage}>
            <div className={styles.dialogsWrapper}>
                <Dialog id={1} name={"Dmitri"}/>
                <Dialog id={2} name={"Victoria"}/>
                <Dialog id={3} name={"Igor"}/>
                <Dialog id={4} name={"Sasha_IT-Patsan"}/>
                <Dialog id={5} name={"Sveta"}/>
            </div>

            <div className={styles.messagesWrapper}>
                <Message id={1} message={"How are you, Sasha?"}/>
                <Message id={2} message={"Good. Are you?"}/>
                <Message id={3} message={"Good"}/>

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
