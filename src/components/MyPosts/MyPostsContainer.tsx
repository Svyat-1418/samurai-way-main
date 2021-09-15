import React from "react";
import {addPostAC,
    InitialStateType,
    updateNewPostTextAC} from "../../redux/profileReducer";
import {ReduxStoreType} from "../../redux/reduxStore";
import {MyPosts} from "./MyPosts";

type PropsType = {
    store: ReduxStoreType
}

export const MyPostsContainer = (props: PropsType) => {
    const state: InitialStateType = props.store.getState().profilePage

    const onAddPostClick = () => {
        props.store.dispatch(addPostAC())
    }
    const onNewPostTextChange = (newText: string) => {
        props.store.dispatch(updateNewPostTextAC(newText))
    }

    return <MyPosts posts={state.posts}
                    newPostText={state.newPostText}
                    addPost={onAddPostClick}
                    updateNewPostText={onNewPostTextChange}
    />
}