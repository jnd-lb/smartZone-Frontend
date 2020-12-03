import React, { Component } from 'react';
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import AboutUs from "../../components/aboutUs/aboutUs";
import ContactUs from "../../components/contactUs/contactUs";
import Footer from "../../components/footer/footer";
import Classes from "./landingpage.module.css"; // when you import the css this you prevent the css from being inherited by the children

export default class landingpage extends Component {
    render() {
        return (
            <div className={Classes.Label}>
              <Header/>  
              <Hero/>
              <AboutUs/>
              <ContactUs/>
              <Footer/>
            </div>
        )
    }
}
