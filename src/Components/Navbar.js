import UserImage from '../images/user_image.png';
import '../Css_Files/Navbar.css';
import {Link} from 'react-router-dom';
import {useContext } from 'react';
import { UserData } from '../Contextapis/ProfileUserContextApi';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRadio } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const {Data,ImageProfile} = useContext(UserData) ;
  return (
    <nav>
     <div className='left-container'>
      <Link to="/">QR</Link>
      <div className='Profile-container'>
       <img width="50px" height="50px" style={{borderRadius:"50%"}} src={ImageProfile||UserImage} alt="User image"/>
       <p style={{color:"black"}}>{Data||"ضيف"}</p> 
      </div>
     </div>
     <ul>
      <li><Link to="/PrayersTime">مواقيت الصلاة</Link></li>  
      <li><Link to="/Azkar">الأذكار</Link></li>    
      <li><Link to="/Sepha">المسبحة الألكترونية</Link></li>    
      <li><Link to="/Login">تسجيل الدخول/أنشاء حساب</Link></li>  
     </ul>   
     <div className='Radio_container'>
      <li><Link to="/RadioLive">راديو مباشر<FontAwesomeIcon className='RadioIcon' icon={faRadio} size="3x" color="blue" /></Link></li>  
     </div>
    </nav>
  )
}
