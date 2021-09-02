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
        {id: 2, message: "I like typescript", likesCount: 10},
        {id: 3, message: "I like ReactJS", likesCount: 10}
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
                {posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}