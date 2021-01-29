import React from "react";
import styles from "./Post.module.css"

type PropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PropsType) => {
    return (
        <div className={styles.post}>
            <img className={styles.postAvatar}
                 src="https://cdnimg.rg.ru/img/content/140/51/49/kinopoisk.ru-Wiedzmin-977505_d_850.jpg"
                 alt="icon"/>
            <div>
                {props.message}
            </div>
            <div>
                Like {props.likesCount}
            </div>
        </div>


    )
}