import React from 'react'
import BrandDropDown from "./brand_dropdown/brandDropDown";
import Slider from "./price_slider/priceSlider";
import ToggleButton from './toggle_button/toggleButton';
import "./tools.css"
function tools(props) {
    return (
        <div className={"d-flex flex-row"}>
            <BrandDropDown className="dropdown" changeBrand={props.changeBrand} selectedBrand={props.selectedBrand} className />
            <Slider 
            className="slider"
            selectedPrice={props.selectedPrice} 
            applyPriceChange={props.applyPriceChange}
            priceChange={props.priceChange}/>
            <ToggleButton toggleFilter={props.toggleFilter} isChecked={props.isChecked}/>
        </div>
    )
}

export default tools
