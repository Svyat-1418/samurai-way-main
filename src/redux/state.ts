import {rerenderEntireTree} from "../render"

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

export const state: StateType = {
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
}

export const addPost = () => {
    const newPost: PostType = {
        id: 10,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}
export const sendMessage = () => {
    const newMessage: MessageType = {
        id: 10,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ""
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
export const updateNewMessageText = (newText: string) => {
    state.dialogsPage.newMessageText = newText
    rerenderEntireTree(state)
}

// @ts-ignore
window.state = state