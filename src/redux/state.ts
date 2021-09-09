const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export type AddPostActionType = {
    type: typeof ADD_POST
}
export type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export type SendMessageActionType = {
    type: typeof SEND_MESSAGE
}
export type UpdateNewMessageTextActionType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    newText: string
}
export type ActionsType =
    AddPostActionType |
    UpdateNewPostTextActionType |
    SendMessageActionType |
    UpdateNewMessageTextActionType

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void

    //addPost: () => void
    //updateNewPostText: (newText: string) => void
    //sendMessage: () => void
    //updateNewMessageText: (newText: string) => void

    dispatch: (action: ActionsType) => void

    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navbar: NavbarType
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}
export type DialogsPageType = {
    newMessageText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type NavbarType = {
    links: Array<LinkType>
    friends: Array<FriendType>
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type LinkType = {
    id: number
    path: string
    linkLabel: string
}
export type FriendType = {
    id: number
    name: string
}

export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: "",
            posts: [
                {id: 1, message: "It is my first typescript project", likesCount: 12},
                {id: 2, message: "I like typescript", likesCount: 10},
                {id: 3, message: "I like ReactJS", likesCount: 10}
            ]
        },
        dialogsPage: {
            newMessageText: "",
            dialogs: [
                {id: 1, name: "Dmitri"},
                {id: 2, name: "Victoria"},
                {id: 3, name: "Igor"},
                {id: 4, name: "Sasha_IT-Patsan"},
                {id: 5, name: "Sveta"}
            ],
            messages: [
                {id: 1, message: "How are you, Sasha?"},
                {id: 2, message: "Good. Are you?"},
                {id: 3, message: "Good"}
            ]
        },
        navbar: {
            links: [
                {id: 1, path: "/profile", linkLabel: "Profile"},
                {id: 2, path: "/dialogs", linkLabel: "Dialogs"},
                {id: 3, path: "/news", linkLabel: "News"},
                {id: 4, path: "/music", linkLabel: "Music"},
                {id: 5, path: "/settings", linkLabel: "Settings"},
            ],
            friends: [
                {id: 2, name: "Victoria"},
                {id: 3, name: "Igor"},
                {id: 4, name: "Sasha_IT-Patsan"}
            ]
        }
    },
    _callSubscriber (state: StateType) {
        console.log("rerenderEntireTree was called")
    },

    dispatch(action: ActionsType) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: 10,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            const newMessage: MessageType = {
                id: 10,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ""
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    },

    getState () {
        return this._state
    },
    subscribe (observer: (state: StateType) => void) {
        this._callSubscriber = observer
    }
}

export const addPostAC = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText})
export const sendMessageAC = (): SendMessageActionType => ({type: SEND_MESSAGE})
export const updateNewMessageTextAC = (newText: string): UpdateNewMessageTextActionType =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText})

// @ts-ignore
window.store = store