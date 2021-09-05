import React from "react";
import styles from "./Profile.module.css";
import {MyPosts} from "../MyPosts/MyPosts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PropsType = {
    state: ProfilePageType
    addPost: (message: string) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div className={styles.profilePage}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     addPost={props.addPost}
            />
        </div>
    )
}

