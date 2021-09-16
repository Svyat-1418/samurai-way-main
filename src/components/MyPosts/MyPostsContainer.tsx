//import React from "react";
import {addPostAC,
    InitialStateType,
    updateNewPostTextAC} from "../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppRootStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {DispatchActionsType} from "../App/App";

type MapStateToPropsType = {
    profilePage: InitialStateType
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<DispatchActionsType>): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (newText) => {
            dispatch(updateNewPostTextAC(newText))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)