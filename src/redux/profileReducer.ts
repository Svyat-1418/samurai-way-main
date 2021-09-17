const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type AddPostActionType = {
    type: typeof ADD_POST
}
export type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ActionsType =
    AddPostActionType |
    UpdateNewPostTextActionType

const initialState = {
    newPostText: "",
    posts: [
        {id: 1, message: "It is my first typescript project", likesCount: 12},
        {id: 2, message: "I like typescript", likesCount: 10},
        {id: 3, message: "I like ReactJS", likesCount: 10}
    ] as Array<PostType>
}
export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
        default:
            return state
    }
}

export const addPostAC = (): AddPostActionType => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText} as const)