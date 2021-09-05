import React from "react";
import styles from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type PropsType = {
    state:DialogsPageType
    sendMessage: (message: string) => void
}

export const Dialogs = (props: PropsType) => {

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const sendMessageHandler = () => {
        if (newMessageElement.current) {
            props.sendMessage(newMessageElement.current.value)
        }
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
                        ref={newMessageElement}
                    />
                    <div>
                        <button onClick={sendMessageHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
