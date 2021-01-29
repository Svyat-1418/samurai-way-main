import React from "react";
import styles from "./Profile.module.css";
import {MyPosts} from "../MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={styles.profilePage}>
            <div>
                <img className={styles.avatar}
                     src="https://cdnimg.rg.ru/img/content/140/51/49/kinopoisk.ru-Wiedzmin-977505_d_850.jpg"
                     alt="icon"/>
                <div className={styles.description}>
                    Description...
                </div>
                <MyPosts/>
            </div>
        </div>
    )
}