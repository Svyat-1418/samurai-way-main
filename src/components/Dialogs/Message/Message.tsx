import React from "react";
import styles from "./Message.module.css";

type PropsType = {
    id?: number
    message: string
}

export const Message = (props: PropsType) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    )
}