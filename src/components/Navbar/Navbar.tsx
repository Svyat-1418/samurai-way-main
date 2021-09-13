import React from "react";
import styles from "./Navbar.module.css";
import Link from "../Link/Link";
import {Friend} from "../Friends/Friends";
import { SidebarType } from "../../redux/sidebarReducer";

type PropsType = {
    state: SidebarType
}

export const Navbar = (props: PropsType) => {
    return (
        <nav className={styles.navbarWrapper}>
            {props.state.links.map(l => <Link key={l.id} id={l.id} path={l.path} linkLabel={l.linkLabel}/>)}

            <div className={styles.friendsWrapper}>
                <h3 className={styles.title}>Friends</h3>
                {props.state.friends.map(fr => <Friend key={fr.id} id={fr.id} name={fr.name}/>)}
            </div>
        </nav>
    )
}