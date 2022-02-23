import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";
import axios from "axios";
import {Header} from "./Header";
import {setAuthUserData} from "../../redux/authReducer";

export type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
export type MapDispatchToPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

type AuthMeResponseType = {
    id: number
    email: string
    login: string
}

class HeaderContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        axios.get<{data: AuthMeResponseType, resultCode: number}>
        (`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((res) => {
                debugger
                if (res.data.resultCode === 0) {
                    const {id, email, login} = res.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);