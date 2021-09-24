import React from 'react';
import styles from './Users.module.css';
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";

type PropsType = MapStateToPropsType & MapDispatchToPropsType

export const Users = (props: PropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://lh3.googleusercontent.com/proxy/1fuZiIr5_vK-7Rj9waFb8feVbWniBOyN_zThMnFlunw2UghWCkNW9eT6N7Neh6HrcFBzT5NM51LmU9098iSWchso',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://lh3.googleusercontent.com/proxy/1fuZiIr5_vK-7Rj9waFb8feVbWniBOyN_zThMnFlunw2UghWCkNW9eT6N7Neh6HrcFBzT5NM51LmU9098iSWchso',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://lh3.googleusercontent.com/proxy/1fuZiIr5_vK-7Rj9waFb8feVbWniBOyN_zThMnFlunw2UghWCkNW9eT6N7Neh6HrcFBzT5NM51LmU9098iSWchso',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I am a boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }

    return <div className={styles.usersPage}>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl}  alt=""/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}