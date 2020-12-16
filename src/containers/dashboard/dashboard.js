import React, { Component } from 'react'
import Header from "./header/header"
import SmartphonesList from "./smartphones_list/smartphonesList"

export default class Dashboard extends Component {
    render() {
        return (
            <>
            <Header/>
            <SmartphonesList/>
            </>
        )
    }
}
