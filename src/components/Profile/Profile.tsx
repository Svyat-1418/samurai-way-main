import React from "react";
import styles from "./Profile.module.css";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type PropsType = {
    profile: ProfileType | null
}

export const Profile = (props: PropsType) => {
    return (
        <div className={styles.profilePage}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

