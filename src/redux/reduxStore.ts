import {combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profileReducer";
import {DialogsActionsType, dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {UsersActionsType, usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = createStore(rootReducer)

// определить автоматически тип всего объекта store
export type ReduxStoreType = typeof store

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

//тип всех action-ов приложения
export type AllAppActionsType = UsersActionsType | DialogsActionsType | ProfileActionsType

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;