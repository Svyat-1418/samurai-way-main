import React from "react";
import styles from "./Navbar.module.css";
import Link from "../Link/Link";
import {Friend} from "../Friends/Friends";
import {FriendType, LinkType} from "../../index";

type PropsType = {
    links: Array<LinkType>
    friends: Array<FriendType>
}

export const Navbar = (props: PropsType) => {
    return (
        <nav className={styles.navbarWrapper}>
            {props.links.map(l => <Link key={l.id} id={l.id} path={l.path} linkLabel={l.linkLabel}/>)}

            <div className={styles.friendsWrapper}>
                <h3 className={styles.title}>Friends</h3>
                {props.friends.map(fr => <Friend key={fr.id} id={fr.id} name={fr.name}/>)}
            </div>
        </nav>
    )
}