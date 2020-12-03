import React from 'react';
import cx from "classnames";
import Classes from "./hero.module.css";
import img from "../../assests/image/mobile.png";
function hero (props) {
    return (   
        
    <section className={cx(Classes.bgimage, "container", "rounded-top")}>
      <div className={cx("container-fluid")}>
        <div className={cx("row")}>
          <div className={cx("col-lg-5", "col-md-5", "col-sm-5", "col-xs-5", Classes.content)}>
            <h5 className={cx(Classes.h5)}>Full width Hero-unit header</h5>
            <p className={cx(Classes.p)}>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <div className={cx(Classes.buttonWrapper)}>
                <a href="#" className={cx(Classes.button, Classes.btnPrimary)}>
                Find Your Dream Smartphone »
               <div className={cx(Classes.btnSecondary)}></div>
               </a> 
            </div>
          </div>
          <div className={cx("col-lg-5", "col-md-5", "col-sm-5", "col-xs-5",Classes.mobile)}>
          <img className={cx("img-fluid")} src={img}/>
          </div>
        </div>
      </div>
    </section> 
    )
}

export default hero;