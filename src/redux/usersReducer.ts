const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

type LocationType = {
    country: string
    city: string
}
type PhotosType = {
    small: string | null
    large: string | null
}
export type UserType = {
    id: number
    name: string
    status?: string
    photos: PhotosType
    followed: boolean
}
const initialState = {
    users: [ ] as Array<UserType>
}
export type InitialStateType = typeof initialState

export type FollowActionType = {
    type: typeof FOLLOW
    userId: number
}
export type UnfollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
type ActionsType =
    FollowActionType |
    UnfollowActionType |
    SetUsersActionType

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  u.id === action.userId ?
                    {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  u.id === action.userId ?
                    {...u, followed: false} : u)
            }
        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...action.users ]}
        }
        default:
            return state;
    }
}

export const followAC = (userId: number): FollowActionType =>
    ({type: FOLLOW, userId } as const)
export const unfollowAC = (userId: number): UnfollowActionType =>
    ({type: UNFOLLOW, userId } as const)
export const setUsersAC = (users: Array<UserType>): SetUsersActionType =>
    ({type: SET_USERS, users } as const)






// export type UserType = {
//     id: number
//     fullName: string
//     followed: boolean
//     status: string
//     photoUrl: string
//     location: LocationType
// }