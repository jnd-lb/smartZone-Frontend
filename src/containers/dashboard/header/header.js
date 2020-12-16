import React from 'react';
import Classes from "./header.module.css"
import cx from "classnames"
import Logo from "../../../assets/images/logo.png";
import {withRouter} from "react-router-dom";

function header(props) {
    
    const logout= ()=>{
        localStorage.clear(); props.history.push("/dashboard/login");
}
    return (
        <div className={cx("",Classes.Header)}>
            <img src={Logo} className="img-fuild"/>
            <ul className={cx(Classes.NavBar)}>
                <li >
                    <a onClick={logout}>Logout</a>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(header);