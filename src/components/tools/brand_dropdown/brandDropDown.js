import React from 'react'

function brandDropDown(props) {
    return (
        <select onChange={props.change} value={props.value}>
            <option value="">Select A Brand</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Oppo">Oppo</option>
        </select>
    )
}

export default brandDropDown
