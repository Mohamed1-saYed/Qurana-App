import React from 'react';
import '../Css_Files/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
       <h3>© 2024
Quran App
. All Rights Reserved. | Developed by Mohamed sayed</h3> 
<div className='API_Link'><p>All API <span><FontAwesomeIcon icon={faArrowRight} style={{color:"#727272"}}/></span></p> <a href='https://alquran.vip/api-docs/' target='_blank'><FontAwesomeIcon icon={faCode} style={{ fontSize: "20px", color: "black" }} /></a><p><FontAwesomeIcon icon={faArrowLeft} style={{color:"#727272"}} /></p></div>
<ul>
  <li><a title='Facebook' className='A-1' href='https://www.facebook.com/profile.php?id=100071761480205' target='_blank'><FontAwesomeIcon icon={faFacebook} /></a></li>
  <li><a title='Gmail' className='A-2' href='mailto:mohammed.sayed9009@gmail.com' target='_blank'><FontAwesomeIcon icon={faEnvelope} /></a></li>
  <li><a title='Github' className='A-3' href='https://github.com/Mohamed1-saYed' target='_blank'><FontAwesomeIcon icon={faGithub} /></a></li>
</ul>
      </footer>
  )
}
