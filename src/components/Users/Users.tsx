import React from 'react';
import styles from './Users.module.css';
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
import axios from "axios";
import {UserType} from "../../redux/usersReducer";
import userPhoto from "./../../assets/images/user-photo.png"

type PropsType = MapStateToPropsType & MapDispatchToPropsType

type GetUsersResponseType = {
    error: string | null
    totalCount: number
    items: Array<UserType>
}

export class Users extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);

        axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users`)
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <div className={styles.usersPage}>
            {
                this.props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div >
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto}  alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }

}