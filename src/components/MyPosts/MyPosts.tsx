import React, {ChangeEvent} from "react";
import styles from "./MyPosts.module.css"
import {Post} from "../Post/Post";
import {ActionsType, addPostAC, PostType, updateNewPostTextAC} from "../../redux/state";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: PropsType) => {
    const addPostHandler = () => {
        props.dispatch(addPostAC())
    }
    const updateNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.dispatch(updateNewPostTextAC(text))
    }

    return (
        <div className={styles.postsWrapper}>
            <h3>My posts</h3>
            <div>
                <textarea
                    onChange={updateNewPostTextHandler}
                    placeholder="What new?"
                    value={props.newPostText}
                />
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>

            <div className={styles.posts}>
                {props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}