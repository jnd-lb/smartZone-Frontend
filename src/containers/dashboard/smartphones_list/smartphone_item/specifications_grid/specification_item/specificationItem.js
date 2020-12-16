import React,{ useRef,useState }  from 'react';
import cx from "classnames";
import Classes from "./specificationItem.module.css";
import BatteryCapacity from '@material-ui/icons/BatteryChargingFull';
import Ram from '@material-ui/icons/Memory';
import FrontCameraRes from '@material-ui/icons/CameraRear';
import RearCameraRes from '@material-ui/icons/CameraFront';
import Price from '@material-ui/icons/AttachMoney';
import Brand from '@material-ui/icons/LocalOffer';
import ScreenSize from '@material-ui/icons/AspectRatio';
import Cpu from '@material-ui/icons/Memory';
import Os from '@material-ui/icons/DeveloperMode';
import Sim from '@material-ui/icons/SimCard';
import ReleasedDate from '@material-ui/icons/Event';
import Sd from '@material-ui/icons/SdStorage';


const getIcon = (type) => {
    switch (type) {
        case "batteryCapacity": return <BatteryCapacity />;
        case "ram": return <Ram />;
        case "frontCameraRes": return <FrontCameraRes />;
        case "rearCameraRes": return <RearCameraRes />;
        case "price": return <Price />;
        case "brand": return <Brand />;
        case "screenSize": return <ScreenSize />;
        case "cpu": return <Cpu />;
        case "os": return <Os />;
        case "sim": return <Sim />;
        case "releasedDate": return <ReleasedDate />;
        case "sd": return <Sd />;
        default: return null;
    }
}

const SpecificationItem = (props) => {
    //<p className={cx(Classes.P)}>{props.specificationDetails}</p>
    const [value,setValue] = useState(); 

    const textarea = useRef(null);
    const change = ()=>{
        props.handleChange(textarea.current.innerHTML,props.type);
    }

    return (
        <>
            <div className={cx("row","justfy-content-center","align-items-center")}>
                <div className={cx("col-1")}>
                    {getIcon(props.type)}
                </div>
                <div className={cx("col-10")}>
                    <h4 className={cx(Classes.H4)}>{props.specificationTitle}</h4>
                </div>
            </div>
            <div className={cx("row")}>
                <div className={cx("col-1")}>
                </div>
                <div className={cx("col-10")}>
                    <textarea ref={textarea} 
                    value= {props.specificationDetails} 
                    onChange={change} 
                    className={cx("border","border-0",Classes.Textarea)} 
                    readOnly={props.readOnly}/>
                </div>
            </div>
        </>
    )
}
export default SpecificationItem;