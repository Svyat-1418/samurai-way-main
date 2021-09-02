import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Friends.module.css";

type PropsType = {
    id: number
    name: string
}

export const Friend = (props: PropsType) => {

    return (

        <div className={styles.friend}>
            <div className={styles.friendAva}>{props.name.charAt(0)}</div>
            <div className={styles.friendName}>
                <NavLink to={`/friends/${props.id}`}>{props.name}</NavLink>
            </div>
        </div>
    )
}