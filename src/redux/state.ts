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
export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    sendMessage: () => void
    updateNewMessageText: (newText: string) => void
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
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
    addPost () {
        const newPost: PostType = {
            id: 10,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    sendMessage () {
        const newMessage: MessageType = {
            id: 10,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ""
        this._callSubscriber(this._state)
    },
    updateNewMessageText (newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber(this._state)
    },
    getState () {
        return this._state
    },
    subscribe (observer: (state: StateType) => void) {
        this._callSubscriber = observer
    }
}

// @ts-ignore
window.store = store