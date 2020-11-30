import React from 'react';
import cx from "classnames";
import Classes from "./aboutUs.module.css";
import img from "../../assests/image/aboutUs.jpg";
function aboutUs (props) {
    return (   
        
    <section className={cx("container", Classes.container)}>
        <div className={cx("row")}>
          <div className={cx("col-lg-5", "col-md-5", "col-sm-5", "col-xs-5", Classes.text)}>
            <h1 className={cx(Classes.h1)}>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
          <img className={cx("col-lg-6", "col-md-6", "col-sm-6", "col-xs-6")} src={img}/>
      </div>
    </section> 
    )
}

export default aboutUs;