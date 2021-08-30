import React from "react";
import styles from "./Navbar.module.css";
import Link from "../Link/Link";

type LinkType = {
    id?: number
    path: string
    linkLabel: string
}

export const Navbar = () => {

    const links: Array<LinkType> = [
        {id: 1, path: "/profile", linkLabel: "Profile"},
        {id: 2, path: "/dialogs", linkLabel: "Dialogs"},
        {id: 3, path: "/news", linkLabel: "News"},
        {id: 4, path: "/music", linkLabel: "Music"},
        {id: 5, path: "/settings", linkLabel: "Settings"},
    ]

    return (
        <nav className={styles.navbarWrapper}>
            <Link id={links[0].id} path={links[0].path} linkLabel={links[0].linkLabel}/>
            <Link id={links[1].id} path={links[1].path} linkLabel={links[1].linkLabel}/>
            <Link id={links[2].id} path={links[2].path} linkLabel={links[2].linkLabel}/>
            <Link id={links[3].id} path={links[3].path} linkLabel={links[3].linkLabel}/>
            <Link id={links[4].id} path={links[4].path} linkLabel={links[4].linkLabel}/>
        </nav>
    )
}