import {ActionsType, PostType, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type AddPostActionType = {
    type: typeof ADD_POST
}
export type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export type ProfileReducerActionsType =
    AddPostActionType |
    UpdateNewPostTextActionType

export const profileReducer = (state: ProfilePageType, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostType = {
                id: 10,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        }
        case "UPDATE-NEW-POST-TEXT": {
            state.newPostText = action.newText
            return state
        }
        default:
            return state
    }
}

export const addPostAC = (): AddPostActionType => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText} as const)