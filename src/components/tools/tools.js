import React from 'react'
import BrandDropDown from "./brand_dropdown/brandDropDown";
import Slider from "./price_slider/priceSlider";
import ToggleButton from './toggle_button/toggleButton';

function tools(props) {
    return (
        <div className={"d-flex flex-row"}>
            <BrandDropDown change={props.change} value={props.value} className />
            <Slider price={props.price} />
            <button>Clear</button>
            <ToggleButton toggleFilter={props.toggleFilter} isChecked={props.isChecked}/>
        </div>
    )
}

export default tools
