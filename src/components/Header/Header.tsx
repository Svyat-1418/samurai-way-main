import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.logo}
                 src="https://yt3.ggpht.com/ytc/AAUvwngdw4sXdA6kUYDDZZi5df9azFXxNwyV7FBbNcGHSw=s900-c-k-c0x00ffffff-no-rj"
                 alt="logo"/>
        </div>
    )
}