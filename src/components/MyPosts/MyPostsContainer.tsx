import React from "react";
import {addPostAC,
    InitialStateType,
    updateNewPostTextAC} from "../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../StoreContext";

export const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                const state: InitialStateType = store.getState().profilePage

                const onAddPostClick = () => {
                    store.dispatch(addPostAC())
                }
                const onNewPostTextChange = (newText: string) => {
                    store.dispatch(updateNewPostTextAC(newText))
                }
                return <MyPosts posts={state.posts}
                                newPostText={state.newPostText}
                                addPost={onAddPostClick}
                                updateNewPostText={onNewPostTextChange}
                />
            }
        }
    </StoreContext.Consumer>
}