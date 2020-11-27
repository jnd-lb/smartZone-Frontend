import React from 'react';
import cx from "classnames";
import Classes from "./contactUs.module.css";
function contactUs (props) {
    return (  
      <section className={cx("container", Classes.container)}> 
        <div className={cx(Classes.formWrapper)}>
            <form id="form" method="post" name="emailform" action="email.php">
                  <h3 className={cx(Classes.formTitle)}>Contact Us</h3>
                  <p className={cx(Classes.formUndertitle)}>Fields marked "*" are required.</p>
                  <div className={cx(Classes.formInputGrid)}>
                    <div>
                      <h5 className={cx(Classes.formText)}>Username*</h5>
                      <div className={cx(Classes.formInputWrapper, Classes.flexboxLeft)}>
                        {/* <i className={cx(Classes.uil, uilUser)}></i> */}
                        <input className={cx(Classes.formInput)} id="uname" name="uname" type="text" placeholder="Username" aria-label="" required/>
                      </div>
                    </div>
                    <div>
                      <h5 className={cx(Classes.formText)}>Password*</h5>
                      <div className={cx(Classes.formInputWrapper, Classes.flexboxLeft)}>
                        {/* <i className={cx(Classes.uil, uil-asterisk)}></i> */}
                        <input className={cx(Classes.formInput)} id="pword" name="pword" type="password" placeholder="Password" aria-label="" required/>
                      </div>
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