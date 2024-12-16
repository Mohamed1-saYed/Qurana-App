import React, { useEffect, useRef, useState } from 'react';
import '../Css_Files/RadioLive.css';
import RadioJson from '../Apis/RadioJson';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

export default function RadioLive() {
const [StateRadio,SetStateRadio] = useState(1);

const Plus = useRef();
const Prev = useRef();
const audio = useRef();

useEffect(function(){
  if(StateRadio<=0){
    Plus.current.style.cssText = `color: rgb(0 0 0 / 51%);cursor: context-menu`;
    localStorage.setItem("SelectRadio",0)
  }else if(StateRadio>0){
    Plus.current.style.cssText = `color: black;cursor: pointer`;
    localStorage.setItem("SelectRadio",Number(+StateRadio))
  }
},[StateRadio])

console.log(StateRadio);

 const ImageRadio = <img style={{borderRadius:"50%",width:"200px",height:"200px"}} src={RadioJson[localStorage.getItem("SelectRadio")||0].img} alt={RadioJson[localStorage.getItem("SelectRadio")]||0}/> 
 const NameOfRadio = <h6>{RadioJson[localStorage.getItem("SelectRadio")||0].name}</h6> 
 const AudioRadio = <audio autoPlay ref={audio} src={RadioJson[localStorage.getItem("SelectRadio")||0].url} controls/>
     
  return (
    <>
    <div className='Radio_Container'>
    {ImageRadio}
    {NameOfRadio}
    {AudioRadio}
    <div className='Arrow_Container'>
     <button ref={Prev} onClick={()=>SetStateRadio((prev)=>prev-1)}><FontAwesomeIcon icon={faBackward} /></button>
     <button ref={Plus} onClick={()=>SetStateRadio((prev)=>prev+1)}><FontAwesomeIcon icon={faForward} /></button>
    </div>
    </div>
    </>
  )
}
 