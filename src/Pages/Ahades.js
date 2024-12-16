import React,{useState,useEffect} from 'react';
import '../Css_Files/Ahades.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Hadees from '../Apis/AhadesJson';

export default function Ahades() {
  const [Hades,SetHades] = useState();
  const [NumOfHades,SetNumOfHades] = useState(1);
  
 useEffect(function(){
  SetHades(`${Hadees[NumOfHades].arab}. ${Hadees[NumOfHades].number}`);
 },[NumOfHades])

  return (
   <>
    <div className='Container_Hades'>
     <div className='Flex_Container'>
      <p>{Hades||`فقد قال عبد الله بن الإمام أحمد: وجدت بخط أبي، ثم روى بسنده إلى أبي أمامة قال: قال صلى الله عليه وسلم: "لا تزال طائفة من أمتي على الدين ظاهرين، لعدوهم قاهرين، لا يضرهم من خالفهم إلا ما أصابهم من لأواء، حتى يأتيهم أمر الله. وهم كذلك"، قالوا: يا رسول الله وأين هم؟ قال: "ببيت المقدس وأكناف بيت المقدس" وأخرجه أيضا الطبراني . قال الهيثمي في المجمع ورجاله ثقات. والله أعلم.`}</p>
      <div className='Container_Btns'>
       <button onClick={()=>SetNumOfHades((prev)=>prev+1)}> <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "26px", color: "white" }} /></button>     
      </div> 
     </div> 
    </div>
   </>
  )
}
