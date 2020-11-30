import React from 'react'
import cx from 'classnames'
import SpecificationItem from "./specification_item/specificationItem"

function specificationsGrid(props) {
    return (
        <>
            <div className={cx("row")}>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Battery Capacity" specificationDetails={props.smartphone.batteryCapacity} type="batteryCapacity" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="RAM" specificationDetails={props.smartphone.ram} type="ram" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Front Camera" specificationDetails={props.smartphone.frontCameraRes} type="frontCameraRes" />
            </div>

            <div className={cx("row")}>
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Memory" specificationDetails={props.smartphone.memory} type="sd" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Sim" specificationDetails={props.smartphone.sim} type="sim" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="OS" specificationDetails={props.smartphone.os} type="os" />
                </div>
            </div>
            <div className={cx("row")}>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="CPU" specificationDetails={props.smartphone.cpu} type="cpu" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Released Date" specificationDetails={props.smartphone.releasedDate} type="releasedDate" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Screen Size" specificationDetails={props.smartphone.screenSize} type="screenSize" />
                </div>
            </div>
            <div className={cx("row")}>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Brand" specificationDetails={props.smartphone.brand} type="brand" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Price" specificationDetails={props.smartphone.price} type="price" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Rear Camera" specificationDetails={props.smartphone.rearCameraRes} type="rearCameraRes" />
                </div>
            </div>
        </>



    )
}

export default specificationsGrid
