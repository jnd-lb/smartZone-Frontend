import React, { Component } from 'react';
import Header from "../../components/header/header";
import SmartphonesList from "../smartphoneslist/smartphonesList";
import cx from "classnames";
import Classes from "./showroom.module.css"

export default class showroom extends Component {
    render() {
        return (
            <>
            <Header/>  
            <br/>          
            <SmartphonesList className={cx(Classes.MainContainer)}/>
            </>
        )
    } 
}
