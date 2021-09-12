import {ActionsType, DialogsPageType, MessageType} from "./state";

const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export type SendMessageActionType = {
    type: typeof SEND_MESSAGE
}
export type UpdateNewMessageTextActionType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    newText: string
}
export type DialogsReducerActionsType =
    SendMessageActionType |
    UpdateNewMessageTextActionType

export const dialogsReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            const newMessage: MessageType = {
                id: 10,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            state.newMessageText = action.newText
            return state
        }
        default:
            return state
    }
}

export const sendMessageAC = (): SendMessageActionType => ({type: SEND_MESSAGE} as const)
export const updateNewMessageTextAC = (newText: string): UpdateNewMessageTextActionType =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText} as const)