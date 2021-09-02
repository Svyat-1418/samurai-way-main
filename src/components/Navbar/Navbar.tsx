import React from "react";
import styles from "./Navbar.module.css";
import Link from "../Link/Link";
import {Friend} from "../Friends/Friends";

type LinkType = {
    id: number
    path: string
    linkLabel: string
}
type FriendType = {
    id: number
    name: string
}
export const Navbar = () => {
    const links: Array<LinkType> = [
        {id: 1, path: "/profile", linkLabel: "Profile"},
        {id: 2, path: "/dialogs", linkLabel: "Dialogs"},
        {id: 3, path: "/news", linkLabel: "News"},
        {id: 4, path: "/music", linkLabel: "Music"},
        {id: 5, path: "/settings", linkLabel: "Settings"},
    ]

    const friends: Array<FriendType> = [
        {id: 2, name: "Victoria"},
        {id: 3, name: "Igor"},
        {id: 4, name: "Sasha_IT-Patsan"}
    ]

    return (
        <nav className={styles.navbarWrapper}>
            {links.map(l => <Link key={l.id} id={l.id} path={l.path} linkLabel={l.linkLabel}/>)}

            <div className={styles.friendsWrapper}>
                <h3 className={styles.title}>Friends</h3>
                {friends.map(fr => <Friend key={fr.id} id={fr.id} name={fr.name}/>)}
            </div>
        </nav>
    )
}