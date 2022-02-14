const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type SendMessageActionType = {
    type: typeof SEND_MESSAGE
}
export type UpdateNewMessageTextActionType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    newText: string
}
export type DialogsActionsType =
    SendMessageActionType |
    UpdateNewMessageTextActionType

const initialState = {
    newMessageText: "",
    dialogs: [
        {id: 1, name: "Dmitri"},
        {id: 2, name: "Victoria"},
        {id: 3, name: "Igor"},
        {id: 4, name: "Sasha_IT-Patsan"},
        {id: 5, name: "Sveta"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "How are you, Sasha?"},
        {id: 2, message: "Good. Are you?"},
        {id: 3, message: "Good"}
    ] as Array<MessageType>
}
export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 10, message: state.newMessageText}],
                newMessageText: ""
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}

export const sendMessageAC = (): SendMessageActionType => ({type: SEND_MESSAGE} as const)
export const updateNewMessageTextAC = (newText: string): UpdateNewMessageTextActionType =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText} as const)