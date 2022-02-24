import styles from "./Users.module.css";
import {Pagination} from "../Pagination/Pagination";
import userPhoto from "../../assets/images/user-photo.png";
import React from "react";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    setCurrentPortion: (currentPortion: number) => void
    currentPortion: number
}

export const Users = (props: PropsType) => {
    return (
        <div className={styles.usersPage}>
            <Pagination
                totalCount={props.totalCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                setCurrentPortion={props.setCurrentPortion}
                currentPortion={props.currentPortion}
            />
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`profile/${u.id}`}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete<{ resultCode: number}>
                                (`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '8b2c8540-f6dc-42fb-9c8f-b949feae7300'
                                    }
                                })
                                    .then((res) => {
                                        if (res.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post<{ resultCode?: number }>
                                (`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '8b2c8540-f6dc-42fb-9c8f-b949feae7300'
                                        }
                                    })
                                    .then((res) => {
                                        if (res.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                            }}>Follow</button>
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
    )
}