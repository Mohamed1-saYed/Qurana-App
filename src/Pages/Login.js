import React from 'react';
import '../Css_Files/Login.css';
import { useState,useContext,useRef,useEffect } from 'react';
import { UserData } from '../Contextapis/ProfileUserContextApi';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping   } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const {SetData,SetImage,SetDisplayNone,DisplayNone} = useContext(UserData);
  const [DataUserLogin,SetDataUserLogin] = useState({
FirstName: "",
SecondName: "",
Email: "",
password: "",
Gender: "",
Image: "",
})

  const signup = useRef(null);
  const Cover_Signup = useRef(null);
  const signin = useRef(null);
  const Cover_Signin = useRef(null);

const FirstPassword = useRef();
const LastPassword = useRef();
const NotValidPassword_P = useRef();
const Wrong_P = useRef();


  function GetData(e){
   localStorage.setItem("NameProfile",DataUserLogin.FirstName);
   SetData(localStorage.getItem("NameProfile"));
   localStorage.setItem("ImageProfile",DataUserLogin.Image);
   SetImage(localStorage.getItem("ImageProfile"));
   SetDisplayNone("none");
  if(FirstPassword.current.value !== LastPassword.current.value){
    Wrong_P.current.innerHTML = "كلمتي المرور غير متطابقتين";
    Wrong_P.current.style.color = "red";
    e.preventDefault()
  }else if(FirstPassword.current.value === LastPassword.current.value){
    Wrong_P.current.style.display = "none";
    return true
  }
  }

  function ShowCoverSignin(){
    Cover_Signup.current.style.display = "none"
  }

  function ShowCoverSignup(){
    Cover_Signin.current.style.display = "none"
  }

  function ShowSignup(){
    signup.current.style.display = "none";
    signin.current.style.display = "block";
  }

  function ShowSignin(){
    signin.current.style.display = "none";
    signup.current.style.display = "block";
  }

const RegEx_Password = /^\d{6}/;

useEffect(function(){
if(FirstPassword.current.value == ""){
  NotValidPassword_P.current.innerHTML = "";
}else if(RegEx_Password.test(FirstPassword.current.value)==false){
  NotValidPassword_P.current.innerHTML = "كلمة المرور قصيرة";
  NotValidPassword_P.current.style.color = "red"
}else if(RegEx_Password.test(FirstPassword.current.value)==true){
  NotValidPassword_P.current.innerHTML = "كلمة المرور مناسبة";
  NotValidPassword_P.current.style.color = "green"
}else{
  NotValidPassword_P.current.innerHTML = ""
}

 if(FirstPassword.current.value == ""){
   LastPassword.current.readOnly = true;
 }else{
  LastPassword.current.readOnly = false;
 }

},[DataUserLogin])

  return (
    <div className='Login_Signin' style={{display:{DisplayNone}}}>
     <div className='signup' ref={signup}>
     <div className='Cover_Signup' ref={Cover_Signup}>
      <h4>أهلا بك  <FontAwesomeIcon icon={faHandsClapping } size="2x" /></h4>
      <p>هل تريد أنشاء حساب؟</p>
      <button onClick={ShowCoverSignin}>أنشاء حساب</button>  
      <button onClick={ShowSignup}>تسجيل الدخول</button>  
     </div>   
      <div className='TopSec'>
       <h1>أنشاء حساب</h1> 
       <button onClick={ShowSignup}>تسجيل الدخول</button>  
      </div>
      <form onSubmit={GetData}>
       <div className='DataUser'>
        <label>الأسم الأول</label>
        <br/>
        <input onChange={(e)=>{SetDataUserLogin((prev)=>({...prev,FirstName:e.target.value}))}} type='text' placeholder='أدخل الأسم' required/>
        <br/>
        <label>الأسم الثاني</label>
        <br/>
        <input onChange={(e)=>{SetDataUserLogin((prev)=>({...prev,SecondName:e.target.value}))}} type="text" placeholder='أدخل الأسم' required/>
        <br/>
        <label>البريد الألكتروني</label>
        <br/>
        <input onChange={(e)=>{SetDataUserLogin((prev)=>({...prev,Email:e.target.value}))}} type='email' placeholder='أدخل بريدك الألكتروني' required/>
        <br/>
        <label>صورة شخصية</label>
        <input onChange={(e)=>{SetDataUserLogin((prev)=>({...prev,Image:URL.createObjectURL(e.target.files[0])}))}} type='file' accept='image'/>
        <br/>
        <br/>
        <select onChange={(e)=>{SetDataUserLogin((prev)=>({...prev,Gender:e.target.value}))}}>
         <option>ذكر</option>
         <option>أنثي</option>
        </select>
        <br/>
        <br/>
        <label>كلمة السر</label>
        <br/>
        <input ref={FirstPassword} onChange={(e)=>{SetDataUserLogin((prev)=>({...prev,password:e.target.value}))}} type='password' placeholder='أدخل كلمة السر' required/>
        <p ref={NotValidPassword_P} style={{color:"red"}}></p>
        <br/>
        <label>تأكيد كلمة السر</label>
        <br/>
        <input ref={LastPassword} type='password' placeholder='أكد كلمة السر' required/>
        <p ref={Wrong_P}></p>
        <br/>
        <input type='submit' value="أنشاء حساب"/>
       </div>
      </form>  
     </div> 
     <div className='signin' ref={signin}>
     <div className='Cover_Signin' ref={Cover_Signin}>
      <h4>أهلا بك  <FontAwesomeIcon icon={faHandsClapping } size="2x" /></h4>
      <p>هل تريد تسجيل الدخول؟ </p>
      <button onClick={ShowCoverSignup}>تسجيل الدخول</button>
      <button onClick={ShowSignin}>أنشاء حساب</button>   
     </div>   
      <div className='TopSec'>
       <h2>تسجيل الدخول</h2>
       <button onClick={ShowSignin}>أنشاء حساب</button>  
      </div>
      <form>
       <div className='UserData'>
        <label>أدخل بريدك الألكتروني</label>
        <br/>
        <input type='email' placeholder='أدخل بريدك الألكتروني' required/>
        <br/>
        <label>كلمة السر</label>
        <br/>
        <input type='password' placeholder='أدخل كلمة السر' required/>
        <br/>
        <br/>
        <div className='ForgetPassword'>
        <p>نسيت</p>
        <Link to="#">كلمة السر</Link>
        </div>
        <br/>
        <input type='submit' value="تسجيل الدخول"/>
       </div>  
      </form>  
     </div> 
    </div>
  )
}
