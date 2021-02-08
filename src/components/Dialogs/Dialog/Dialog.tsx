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
            <NavLink to={`${path}${props.id}`} activeClassName={styles.active}>
                {props.name}
            </NavLink>
        </div>
    )
}