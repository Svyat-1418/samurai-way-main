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

export const Users = (props: PropsType) => {
    if (props.usersPage.users.length === 0) {
        axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users`)
            .then((res) => {
                props.setUsers(res.data.items)
            })
    }

    return <div className={styles.usersPage}>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div >
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto}  alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>
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