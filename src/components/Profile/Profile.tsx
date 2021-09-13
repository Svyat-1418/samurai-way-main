import React from "react";
import styles from "./Profile.module.css";
import {MyPosts} from "../MyPosts/MyPosts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import { InitialStateType } from "../../redux/profileReducer";
import {DispatchActionsType} from "../App/App";

type PropsType = {
    state: InitialStateType
    dispatch: (action: DispatchActionsType) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div className={styles.profilePage}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

