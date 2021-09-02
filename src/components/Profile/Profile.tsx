import React from "react";
import styles from "./Profile.module.css";
import {MyPosts} from "../MyPosts/MyPosts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {PostType} from "../../index";

type PropsType = {
    posts: Array<PostType>
}

export const Profile = (props: PropsType) => {
    return (
        <div className={styles.profilePage}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

