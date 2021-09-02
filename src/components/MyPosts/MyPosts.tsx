import React from "react";
import styles from "./MyPosts.module.css"
import {Post} from "../Post/Post";
import {PostType} from "../../index";

type PropsType = {
    posts: Array<PostType>
}

export const MyPosts = (props: PropsType) => {
    return (
        <div className={styles.postsWrapper}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder="What new?"/>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={styles.posts}>
                {props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}