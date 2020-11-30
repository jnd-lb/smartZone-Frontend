import React from 'react';
import cx from "classnames";
import Classes from "./contactUs.module.css";
function contactUs (props) {
    return (  
      <section className={cx("container", Classes.container)}> 
        <div className={cx(Classes.formWrapper)}>
            <form id="form" method="post" name="emailform" action="email.php">
                  <h3 className={cx(Classes.formTitle)}>Contact Us</h3>
                  <h6 className={cx(Classes.formUndertitle)}>Couldn't find what you are looking for?<br className={cx(Classes.break)} ></br> Contact us through this form. We are looking forward to hearing from you.</h6>
                  <p className={cx(Classes.required)}>Fields marked "*" are required.</p>
                <div className={cx(Classes.formInputMax)}>
                  <h5 className={cx(Classes.formText)}>Full Name*</h5>
                  <div className={cx(Classes.formInputWrapper, Classes.flexboxLeft)}>
                    {/* <i className={cx(Classes.uil, Clasess.uil-at)}></i> */}
                    <input className={cx(Classes.formInput)} id="name" name="name" type="text" placeholder="Full Name" aria-label="" required/>
                </div>
                </div>
                <div className={cx(Classes.formInputMax)}>
                  <h5 className={cx(Classes.formText)}>Email*</h5>
                  <div className={cx(Classes.formInputWrapper, Classes.flexboxLeft)}>
                    {/* <i className={cx(Classes.uil, Clasess.uil-at)}></i> */}
                    <input className={cx(Classes.formInput)} id="email" name="email" type="email" placeholder="Email" aria-label="" required/>
                  </div>
                </div>
                <div className={cx(Classes.formInputMax)}>
                  <h5 className={cx(Classes.formText)}>Message* <small>(Max 500)</small></h5>
                  <div id="textarea" className={cx(Classes.formInputWrapper, Classes.flexboxLeftStart)}>
                    {/* <i className={cx(Classes.uil, uil-comment-dots)}></i> */}
                    <textarea className={cx(Classes.formInput)} id="message" name="message" placeholder="Your message" maxlength="500" aria-label="" required></textarea>
                  </div>
                 </div>
                 <div className={cx(Classes.formInputMax, Classes.flexboxLeft)}>
                  <div className={cx(Classes.buttonWrapper)}>
                     <button id="form-button" type="submit" className={cx(Classes.button, Classes.btnPrimary)}>
                    {/*<i className={cx(Classes.uil uil-envelope-heart"></i>*/}
                    Send 
                    <div className={cx(Classes.btnSecondary)}></div>
                    </button> 
                   </div>
                 </div>
            </form>
        </div>
      </section>
    )
}

export default contactUs;