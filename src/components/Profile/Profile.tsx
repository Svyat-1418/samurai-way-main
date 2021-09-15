import React from "react";
import styles from "./Profile.module.css";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../../redux/reduxStore";

type PropsType = {
    store: ReduxStoreType
}

export const Profile = (props: PropsType) => {
    return (
        <div className={styles.profilePage}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

