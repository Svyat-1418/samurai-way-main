import React from "react";
import styles from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    name: string
}

export const Dialog = (props: PropsType) => {
    const path = "/dialogs/"
    return (
        <div className={styles.dialog}>
            <div className={styles.dialogInfo}>
                <div className={styles.dialogAva}>{props.name.charAt(0)}</div>
                <div className={styles.dialogName}>
                    <NavLink to={`${path}${props.id}`}>
                        {props.name}
                    </NavLink>
                </div>
            </div>
            {/*<UserInfo id={props.id} name={props.name} />*/}
        </div>
    )
}