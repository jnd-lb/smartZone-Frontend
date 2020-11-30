import React from 'react'
import BrandDropDown from "./brand_dropdown/brandDropDown";
import Slider from "./price_slider/priceSlider";
import ToggleButton from './toggle_button/toggleButton';

function tools(props) {
    return (
        <div className={"d-flex flex-row"}>
            <BrandDropDown changeBrand={props.changeBrand} selectedBrand={props.selectedBrand} className />
            <Slider 
            selectedPrice={props.selectedPrice} 
            applyPriceChange={props.applyPriceChange}
            priceChange={props.priceChange}/>
            <ToggleButton toggleFilter={props.toggleFilter} isChecked={props.isChecked}/>
        </div>
    )
}

export default tools
