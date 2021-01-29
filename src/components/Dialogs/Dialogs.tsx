import React from "react";
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs: React.FC = () => {
    return (
        <div className={styles.dialogsPage}>
            <div className={styles.dialogsWrapper}>
                <div className={styles.dialog}>
                    <NavLink to={"/dialogs/1"} activeClassName={styles.active}>Dmitri</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={styles.active}>Victoria</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={styles.active}>Valery</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/4' activeClassName={styles.active}>Pavel</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/5' activeClassName={styles.active}>Vlad</NavLink>
                </div>
            </div>

            <div className={styles.messagesWrapper}>
                <div className={styles.message}>Hi!</div>
                <div className={styles.message}>How is your</div>
                <div className={styles.message}>Good</div>

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
