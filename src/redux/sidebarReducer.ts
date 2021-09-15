
export type LinkType = {
    id: number
    path: string
    linkLabel: string
}
export type FriendType = {
    id: number
    name: string
}

const initialState = {
    links: [
        {id: 1, path: "/profile", linkLabel: "Profile"},
        {id: 2, path: "/dialogs", linkLabel: "Dialogs"},
        {id: 3, path: "/news", linkLabel: "News"},
        {id: 4, path: "/music", linkLabel: "Music"},
        {id: 5, path: "/settings", linkLabel: "Settings"},
    ] as Array<LinkType>,
    friends: [
        {id: 2, name: "Victoria"},
        {id: 3, name: "Igor"},
        {id: 4, name: "Sasha_IT-Patsan"}
    ] as Array<FriendType>
}
export type InitialStateType = typeof initialState


export const sidebarReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    return state
}