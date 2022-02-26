import React from "react";
import {Profile} from "./Profile";
import {getUserProfile, ProfileType} from "../../redux/profileReducer";
import {AppRootStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}

type UrlParams = {
    userId: string
}

type PropsType = RouteComponentProps<UrlParams>&MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 2
        this.props.getUserProfile(+userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'} />
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)