import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppRootStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";

type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
}

class ProfileContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res) => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)