import React from "react";
import styles from "./MyPosts.module.css"
import {Post} from "../Post/Post";

export const MyPosts = () => {
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
                <Post message={"It is my first typescript project"} likesCount={12}/>
                <Post message={"I like typescript"} likesCount={10}/>
            </div>
        </div>
    )
}