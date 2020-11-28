import React from 'react';
import Classes from "./header.module.css"
import cx from "classnames"
import Logo from "../../assets/images/logo.png";

function header(props) {
    return (
        <div className={cx("",Classes.Header)}>
            <img src={Logo} className="img-fuild"/>
            <ul className={cx(Classes.NavBar)}>
                <li >
                    <a link="" >About Us</a>
                </li>
                <li >
                    <a link="">Contact Us</a>
                </li>
            </ul>
        </div>
    )
}

export default header;