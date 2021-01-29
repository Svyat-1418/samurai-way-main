import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.navbarWrapper}>
            <div className={styles.link}>
                <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to="/dialogs" activeClassName={styles.active}>Dialogs</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
            </div>
        </nav>
    )
}