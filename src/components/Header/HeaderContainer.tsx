import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";
import {Header} from "./Header";
import {getAuthUserData} from "../../redux/authReducer";

export type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
export type MapDispatchToPropsType = {
    getAuthUserData: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

class HeaderContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);