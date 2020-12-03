import React from 'react';
import cx from "classnames";
import Classes from "./footer.module.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
function footer (props) {
    return (   
<footer className={cx(Classes.footer)}>
  <div className={cx(Classes.container)}>
      <div className={cx("row")}>
        <div className={cx("col-md-12")}>
          {/* Follow Us */}
          <ul className={cx(Classes.footerFollow)}> 
            <li><a className={cx(Classes.a)} href="#"><FacebookIcon/></a></li>
            <li><a className={cx(Classes.a)} href="#"><TwitterIcon/></a></li>
            <li><a className={cx(Classes.a)} href="#"><InstagramIcon/></a></li>
            <li><a className={cx(Classes.a)} href="#"><LinkedInIcon/></a></li>
            <li><a className={cx(Classes.a)} href="#"><YouTubeIcon/></a></li>
          </ul>
          {/* NavBar */}
          <div className={cx("",Classes.Header)}>
            <ul className={cx(Classes.NavBar)}>
                  <li className={cx(Classes.border)}>
                      <a className={cx(Classes.NavBarA)} link="" >About Us</a>
                  </li>
                  <li >
                      <a className={cx(Classes.NavBarA)} link="">Contact Us</a>
                  </li>
            </ul>
          </div>
          
        {/* CopyRight */}
          <div className={cx(Classes.footerCopyright)}>
            <p>Copyright © 2020. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>

   
    )
}

export default footer;