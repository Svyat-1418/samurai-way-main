import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

type PropsType = {
    isAuth: boolean
    login: string | null
    setAuthUserData: (userId: number, email: string, login: string) => void
}

export const Header = (props: PropsType) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo}
                 src="https://yt3.ggpht.com/ytc/AAUvwngdw4sXdA6kUYDDZZi5df9azFXxNwyV7FBbNcGHSw=s900-c-k-c0x00ffffff-no-rj"
                 alt="logo"/>

            <div className={styles.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
}