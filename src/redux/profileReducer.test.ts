import {addPostAC, profileReducer, updateNewPostTextAC} from "./profileReducer"
import {ProfilePageType} from "./state";

let startState: ProfilePageType

beforeEach(() => {
    startState = {
        newPostText: "",
        posts: [
            {id: 1, message: "It is my first typescript project", likesCount: 12},
            {id: 2, message: "I like typescript", likesCount: 10},
            {id: 3, message: "I like ReactJS", likesCount: 10}
        ]
    }
})

test("correct post should be added", () => {
    const endState = profileReducer(startState, addPostAC())

    expect(endState.posts.length).toBe(4)
    expect(endState.posts[3].message).toBe(startState.newPostText)
})
test("correct post text should be update", () => {
    const newTextValue = "IT-KAMASUTRA"
    const endState = profileReducer(startState, updateNewPostTextAC(newTextValue))

    expect(endState.newPostText).toBe(newTextValue)
})