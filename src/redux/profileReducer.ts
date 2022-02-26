import {usersAPI} from "../api/api";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

export type AddPostActionType = {
    type: typeof ADD_POST
}
export type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType | null
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType = {
    facebook: string | null
    website: string | null,
    vk: string | null,
    twitter: string | null
    instagram: string | null
    youtube: string | null,
    github: string | null
    mainLink: string | null
}
type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
export type ProfileActionsType =
    AddPostActionType |
    UpdateNewPostTextActionType |
    SetUserProfileActionType

const initialState = {
    newPostText: "",
    posts: [
        {id: 1, message: "It is my first typescript project", likesCount: 12},
        {id: 2, message: "I like typescript", likesCount: 10},
        {id: 3, message: "I like ReactJS", likesCount: 10}
    ] as Array<PostType>,
    profile: null as ProfileType | null
}
export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 10, message: state.newPostText, likesCount: 0}],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostAC = (): AddPostActionType => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText} as const)
const setUserProfile = (profile: ProfileType | null): SetUserProfileActionType =>
    ({type: SET_USER_PROFILE, profile} as const)

export const getUserProfile = (userId: number) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then((res) => {

            dispatch(setUserProfile(res.data))
        })
}