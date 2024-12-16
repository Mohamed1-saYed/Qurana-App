import React,{useEffect, useRef, useState} from 'react';
 import '../Css_Files/Sepha.css';
 import Tsapeh from '../Apis/Tsapeh';

 export default function Sepha() {
     const [count,SetCount] = useState(0);
     const [Tspeh,SetTspeh] = useState("");
     useEffect(function(){
        if(count<=33){
         SetTspeh(Tsapeh[0].dhikr)
        }else if(count > 33&&count < 67){
         SetTspeh(Tsapeh[1].dhikr)
        }else if(count >= 66&&count <= 99){
         SetTspeh(Tsapeh[2].dhikr)
        }
        else if(count > 99){
          SetTspeh(Tsapeh[3].dhikr)
         }
     },[count,Tspeh])

const Btn_Count_1 = useRef();
const Btn_Count_2 = useRef();
const Reset_Btn_1 = useRef();
const Reset_Btn_2 = useRef();

function Plus_Count_1(){
  SetCount((prev)=>prev+1);
  Btn_Count_1.current.style.display = "none";
  Btn_Count_2.current.style.display = "block";
}

function Plus_Count_2(){
  SetCount((prev)=>prev+1);
  Btn_Count_1.current.style.display = "block";
  Btn_Count_2.current.style.display = "none";
}

function Plus_Reset_1(){
  SetCount(0);
  Reset_Btn_1.current.style.display = "none";
  Reset_Btn_2.current.style.display = "block";
}

function Plus_Reset_2(){
  SetCount(0);
  Reset_Btn_1.current.style.display = "block";
  Reset_Btn_2.current.style.display = "none";
}
 
 
   return (
    <>
     <div className='ContainerOfAll'>
     <h2 style={{border:"none!important"}}>:سبح الأن</h2>
     <h3 className='Taspeh'>{Tspeh}</h3>
      <div className='Sepha_Container'>
       <div className='Image_Container'>
       <span className='Display'>{count}</span>
       <button ref={Btn_Count_1} onClick={Plus_Count_1} className='Count_Btn'></button>
       <button ref={Reset_Btn_1} onClick={Plus_Reset_1} className='Reset_Btn'></button>
       <button ref={Btn_Count_2} onClick={Plus_Count_2} className='Count_Btn_2'></button>
       <button ref={Reset_Btn_2} onClick={Plus_Reset_2} className='Reset_Btn_2'></button>
       </div>
      </div>
     </div>
    </>
   )
 }


