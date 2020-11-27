import React from 'react';
import cx from "classnames";
import Classes from "./hero.module.css";

function hero (props) {
    return (   
        
    <section className={cx(Classes.bgimage, "container")}>
      <div className={cx("container-fluid")}>
        <div className={cx("row")}>
          <div className={cx("col-lg-5", "col-md-5", "col-sm-5", "col-xs-5", Classes.content)}>
            <h5 className={cx(Classes.h5)}>Hello, world! Full width Hero-unit header</h5>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <p><a href="#" className={cx("btn", "btn-primary", "btn-large")}>Find Your Dream Smartphone »</a></p>
          </div>
        </div>
      </div>
    </section> 
    )
}

export default hero;