import React from 'react';
import '../Css_Files/ListenReadQuran.css'
import { useState,useEffect,useRef } from 'react';
 import SoarMp3 from '../Apis/SoarMp3';
 export default function ListenReadQuran() {
     const [Audio,setAudio] = useState();
     const Audio_Fixed = useRef();
     const Audio_Mp3 = useRef();

    useEffect(function(){
     if(Audio==""||Audio==null||Audio==undefined){
        Audio_Fixed.current.style.display = "none";
     }else if(Audio!==""||Audio!==null||Audio!==undefined){
        Audio_Fixed.current.style.display = "block";
     }
    },[Audio])

    let Audios = SoarMp3.map(function(e,index){
        return <div key={index}>
        <p className='SoraName'>{e.asma.ar.short}/{e.asma.en.short}</p>
        <audio style={{width:"100%"}} muted ref={Audio_Mp3} onPlay={()=>{setAudio(e.recitation.full);Audio_Fixed.current.display = "block"}} src={e.recitation.full} controls/>
    </div>
       })
       
   return (
     <>
      <div ref={Audio_Fixed} className='Audio_Fixed'>
       <button className='BtnRemove' onClick={()=>{Audio_Fixed.current.style.display = "none"}}>X</button>  
       <audio src={Audio?Audio:""} autoPlay controls/>
      </div>
      <div className='Audios_Container'>
        {Audios} 
      </div>
     </>
   )
 }
