import styles from "./ProfileInfo.module.css"
import React from "react";

export const ProfileInfo = () => {
    return (
        <div>
            <img className={styles.avatar}
                 src="https://cdnimg.rg.ru/img/content/140/51/49/kinopoisk.ru-Wiedzmin-977505_d_850.jpg"
                 alt="icon"/>
            <div className={styles.description}>
                Description...
            </div>
        </div>
    )
}