import React from 'react'

function priceSlider(props) {
    console.log(props);
    return (
        <div>
            <input type="range"  onMouseUp={props.applyPriceChange} onChange={props.priceChange} min="1" max="5000" value={props.selectedPrice} className="slider" id="myRange" />
            <p>{(props.selectedPrice>0)? `Max Price $${props.selectedPrice}`:"" }</p>
        </div>
    )
}

export default priceSlider
