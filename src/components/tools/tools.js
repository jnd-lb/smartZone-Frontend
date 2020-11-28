import React from 'react'
import BrandDropDown from "./brand_dropdown/brandDropDown";
import Slider from "./price_slider/priceSlider";

function tools(props) {
    return (
        <div className={"d-flex flex-row"}>
            <BrandDropDown change={props.change} value={props.value} className/>
            <Slider/>       
            <button>Filter</button>     
        </div>
    )
}

export default tools
