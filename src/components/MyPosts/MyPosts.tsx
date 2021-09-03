import React from "react";
import styles from "./MyPosts.module.css"
import {Post} from "../Post/Post";
import {PostType} from "../../redux/state";

type PropsType = {
    posts: Array<PostType>
}

export const MyPosts = (props: PropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPostHandler = () => alert(newPostElement.current?.value)

    return (
        <div className={styles.postsWrapper}>
            <h3>My posts</h3>
            <div>
                <textarea
                    placeholder="What new?"
                    ref={newPostElement}
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