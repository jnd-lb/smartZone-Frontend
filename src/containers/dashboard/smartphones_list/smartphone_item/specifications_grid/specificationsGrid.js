import React from 'react'
import cx from 'classnames'
import SpecificationItem from "./specification_item/specificationItem"

function specificationsGrid(props) {
    return (
        <>
            <div className={cx("row")}>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Battery Capacity" handleChange={props.handleChange} readOnly={props.readOnly} specificationDetails={props.smartphone.batteryCapacity} type="batteryCapacity" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="RAM" handleChange={props.handleChange} readOnly={props.readOnly} specificationDetails={props.smartphone.ram} type="ram" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Front Camera" handleChange={props.handleChange} readOnly={props.readOnly} specificationDetails={props.smartphone.frontCameraRes} type="frontCameraRes" />
            </div>

            <div className={cx("row")}>
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Memory" handleChange={props.handleChange} readOnly={props.readOnly} specificationDetails={props.smartphone.memory} type="sd" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Sim" handleChange={props.handleChange} readOnly={props.readOnly} specificationDetails={props.smartphone.sim} type="sim" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="OS" handleChange={props.handleChange} readOnly={props.readOnly} specificationDetails={props.smartphone.os} type="os" />
                </div>
            </div>
            <div className={cx("row")}>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="CPU" handleChange={props.handleChange} readOnly={props.readOnly} specificationDetails={props.smartphone.cpu} type="cpu" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Released Date" handleChange={props.handleChange} readOnly={props.readOnly} specificationDetails={props.smartphone.releasedDate} type="releasedDate" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Screen Size" handleChange={props.handleChange} readOnly={props.readOnly} specificationDetails={props.smartphone.screenSize} type="screenSize" />
                </div>
            </div>
            <div className={cx("row")}>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Brand" handleChange={props.handleChange} readOnly={props.readOnly} specificationDetails={props.smartphone.brand} type="brand" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Price" handleChange={props.handleChange} readOnly={props.readOnly} specificationDetails={props.smartphone.price} type="price" />
                </div>
                <div className={cx("col-md-4", "col-sm-12")} >
                    <SpecificationItem specificationTitle="Rear Camera" handleChange={props.handleChange} readOnly={props.readOnly} specificationDetails={props.smartphone.rearCameraRes} type="rearCameraRes" />
                </div>
            </div>
        </>

    )
}

export default specificationsGrid
