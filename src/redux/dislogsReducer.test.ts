import {DialogsPageType} from "./state";
import {dialogsReducer, sendMessageAC, updateNewMessageTextAC} from "./dialogsReducer";

let startState: DialogsPageType

beforeEach(() => {
    startState = {
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
    }
})

test("correct message should be sent", () => {
    const endState = dialogsReducer(startState, sendMessageAC())

    expect(endState.messages.length).toBe(4)
    expect(endState.messages[3].message).toBe(startState.newMessageText)
})
test("correct post text should be update", () => {
    const newTextValue = "IT-KAMASUTRA"
    const endState = dialogsReducer(startState, updateNewMessageTextAC(newTextValue))

    expect(endState.newMessageText).toBe(newTextValue)
})