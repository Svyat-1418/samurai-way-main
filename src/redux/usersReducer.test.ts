import {followAC, InitialStateType, setUsersAC, unfollowAC, usersReducer, UserType} from "./usersReducer";

let startState: InitialStateType
let testUsersSet: Array<UserType>

beforeEach(() => {
    startState = {users: []}
    testUsersSet = [
        {
            id: 1,
            photoUrl: 'https://lh3.googleusercontent.com/proxy/1fuZiIr5_vK-7Rj9waFb8feVbWniBOyN_zThMnFlunw2UghWCkNW9eT6N7Neh6HrcFBzT5NM51LmU9098iSWchso',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://lh3.googleusercontent.com/proxy/1fuZiIr5_vK-7Rj9waFb8feVbWniBOyN_zThMnFlunw2UghWCkNW9eT6N7Neh6HrcFBzT5NM51LmU9098iSWchso',
            followed: true,
            fullName: 'Sasha',
            status: 'I am a boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://lh3.googleusercontent.com/proxy/1fuZiIr5_vK-7Rj9waFb8feVbWniBOyN_zThMnFlunw2UghWCkNW9eT6N7Neh6HrcFBzT5NM51LmU9098iSWchso',
            followed: false,
            fullName: 'Andrew',
            status: 'I am a boss too',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ]
})

test("follow on correct user", () => {
    startState.users = testUsersSet
    const endState = usersReducer(startState, followAC(3))

    expect(endState.users[2].followed).toBeTruthy()
})
test("unfollow on correct user", () => {
    startState.users = testUsersSet
    const endState = usersReducer(startState, unfollowAC(2))

    expect(endState.users[1].followed).toBeFalsy()
})
test("set correct users", () => {
    const endState = usersReducer(startState, setUsersAC(testUsersSet))

    expect(endState.users).toStrictEqual(testUsersSet)
    expect(endState.users.length).toBe(testUsersSet.length)
})