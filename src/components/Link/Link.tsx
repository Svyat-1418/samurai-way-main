import React from "react";
import s from "./Link.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    id?: string
    path: string
    linkLabel: string
}

const Link: React.FC <PropsType> = (props) => {
    return (
        <div className={s.link}>
            <NavLink to={props.path} activeClassName={s.active}>{props.linkLabel}</NavLink>
        </div>
    )
}
export default Link;