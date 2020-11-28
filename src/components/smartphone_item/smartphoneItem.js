import React from 'react';
import cx from "classnames";
import SpecificationsGrid from "./specifications_grid/specificationsGrid";
import Classes from "./smartphoneItem.module.css";

function smartphoneItem(props) {
    return (
        <div ref={(props.lastItem)?(e)=>{console.log("From last item rendered",e); props.setElementToBeObserverd(e)}:null }
         className={cx("container",Classes.SmartphoneItem)}>
            <div className={cx("row")}>
                <div className={cx("text-center","flex-column","col-md-3", "col-sm-12", "d-flex", "justify-content-center", "align-items-center")}>
                    <img src={props.smartphone.imgUrl} className={cx("img-fluid","H1")} />
                    
                    <h1 className={cx(Classes.H1)}>{props.smartphone.modelName}</h1>
                </div>
                <div className={cx("col-md-9", "col-sm-12")}>
                    <SpecificationsGrid smartphone={props.smartphone} />
                </div>

            </div>
        </div>
    )
}

export default smartphoneItem
