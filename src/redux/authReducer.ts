import {authAPI} from "../api/api";
import {AppThunk} from "./reduxStore";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"

type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA
    data: {
        userId: number
        email: string
        login: string
    }
}

export type AuthActionsType = SetAuthUserDataActionType

const initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false
}
export type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return { ...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string): SetAuthUserDataActionType =>
    ({type: SET_AUTH_USER_DATA, data: {userId, email, login}} as const)

export const getAuthUserData = (): AppThunk => (dispatch) => {
    authAPI.me()
        .then((res) => {
            if (res.data.resultCode === 0) {
                const {id, email, login} = res.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}