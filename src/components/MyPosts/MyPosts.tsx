import React, {ChangeEvent} from "react";
import styles from "./MyPosts.module.css"
import {Post} from "../Post/Post";
import {InitialStateType} from "../../redux/profileReducer";

type PropsType = {
    profilePage: InitialStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: PropsType) => {
    const addPostHandler = () => {
        props.addPost()
    }
    const updateNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={styles.postsWrapper}>
            <h3>My posts</h3>
            <div>
                <textarea
                    onChange={updateNewPostTextHandler}
                    placeholder="What new?"
                    value={props.profilePage.newPostText}
                />
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>

            <div className={styles.posts}>
                {props.profilePage.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}