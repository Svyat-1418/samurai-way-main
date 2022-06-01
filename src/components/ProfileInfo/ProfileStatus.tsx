import React from "react";

type StateType = { editMode: boolean }
type PropsType = { status: string }

export class ProfileStatus extends React.Component<PropsType, StateType> {
    state: StateType = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return this.state.editMode
            ? <input value={this.props.status} onBlur={this.deactivateEditMode} autoFocus />
            : <span onDoubleClick={this.activateEditMode}>
                {this.props.status}
            </span>
    }
}