import React, {ChangeEvent} from "react";

type StateType = {
    status: string
    editMode: boolean
}
type PropsType = {
    status: string
    updateProfileStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType, StateType> {
    state: StateType = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateProfileStatus(this.state.status)
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    // componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({status: this.props.status})
    //     }
    // }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return this.state.editMode
            ? <input value={this.state.status}
                     onBlur={this.deactivateEditMode} autoFocus
                     onChange={this.onChangeStatus}
            />
            : <span onDoubleClick={this.activateEditMode}>
                {this.props.status}
            </span>
    }
}