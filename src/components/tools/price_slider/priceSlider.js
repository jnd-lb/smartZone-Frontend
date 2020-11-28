import React from 'react'

function priceSlider() {
    return (
        <div>
            <input type="range" min="1" max="5000" value="50" className="slider" id="myRange" />
        </div>
    )
}

export default priceSlider
