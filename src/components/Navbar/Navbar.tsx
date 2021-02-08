import React from "react";
import styles from "./Navbar.module.css";
import Link from "../Link/Link";

export const Navbar = () => {
    return (
        <nav className={styles.navbarWrapper}>
            <Link path={"/profile"} linkLabel={"Profile"}/>
            <Link path={"/dialogs"} linkLabel={"Dialogs"}/>
            <Link path={"/news"} linkLabel={"News"}/>
            <Link path={"/music"} linkLabel={"Music"}/>
            <Link path={"/settings"} linkLabel={"Settings"}/>
        </nav>
    )
}