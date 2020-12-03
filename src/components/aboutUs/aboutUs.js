import React from 'react';
import cx from "classnames";
import Classes from "./aboutUs.module.css";
import img from "../../assests/image/264-2647491_team-young-team-png.png";
function aboutUs (props) {
    return (   
        
    <section className={cx("container", Classes.container)}>
        <div className={cx("row")}>
          <div className={cx("col-lg-5", "col-md-5", "col-sm-11", "col-xs-12", Classes.text)}>
            <h1 className={cx(Classes.h1)}>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
          <div className={cx("col-lg-5", "col-md-5", "col-sm-11", "col-xs-12", Classes.image)}>
            <img className={cx("img-fluid")} src={img}/>
          </div>
      </div>
    </section> 
    )
}

export default aboutUs;