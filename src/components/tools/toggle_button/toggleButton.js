import React from 'react';
import classes from "./toggleButton.module.css";
import cx from "classnames";

function toggleButton(props) {
    console.log("From toggleButton",props);
    return (
        <label className={classes.switch}>
            <input type="checkbox" onChange={(e)=>{props.toggleFilter(e)}} checked={props.isChecked} />
            <span className={cx(classes.slider, classes.round)}></span>
        </label>
    )
}

export default toggleButton;
