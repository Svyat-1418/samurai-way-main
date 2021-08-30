import React from "react";
import styles from "./MyPosts.module.css"
import {Post} from "../Post/Post";

type PostType = {
    id: number
    message: string
    likesCount: number
}

export const MyPosts = () => {

    const posts: Array<PostType> = [
        {id: 1, message: "It is my first typescript project", likesCount: 12},
        {id: 2, message: "I like typescript", likesCount: 10}
    ]

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
                <Post id={posts[0].id} message={posts[0].message} likesCount={posts[0].likesCount}/>
                <Post id={posts[1].id} message={posts[1].message} likesCount={posts[1].likesCount}/>
            </div>
        </div>
    )
}