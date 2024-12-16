import React, { useState, useEffect,useRef } from 'react';
import '../Css_Files/Home.css';
import header_image from '../images/header(2)png.png';
import {Link} from 'react-router-dom';
import Azkar from '../Apis/Azkaar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
const [Soar, SetSoar] = useState([]); 

const [NumSora,SetNumSora] = useState(Number(+localStorage.getItem("NumOfSora"))||0)
const [SoraClickAR, SetSoraClickAR] = useState([]); 
const ContainerOfSoar = useRef();
const BtnSoar = useRef();

const [Loading,SetLoading] = useState(true);

useEffect(function(){
SetLoading(true) 
fetch(`https://alquran.vip/APIs/ayah?number=${NumSora}`)
.then((response) => response.json())
.then((data) => {
  if (Array.isArray(data)) {
    SetSoraClickAR(data);
  }
    SetLoading(false)  
})
.catch((error) => console.error("Error fetching data:", error));
},[NumSora])

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          SetSoar(data.data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));

      
      if(SoraClickAR.length == ""||SoraClickAR.length === ""){
        ContainerOfSoar.current.style.cssText = "display: none"
       }else{
         ContainerOfSoar.current.style.cssText = "display: flex"
       }
  }, []);

  const elements = Soar.map((e) => (
    <div key={e.number} className='Container_Of_Soar'>
     <div className='left_container'>
      <p className='Number'>{e.number}</p>
      <p className="hint--bottom-right" title="Read">قرائة</p>
      <button onClick={()=>{localStorage.setItem("NumOfSora",e.number);SetNumSora(Number(+localStorage.getItem("NumOfSora")));ContainerOfSoar.current.style.display = "flex"}} className="hint--bottom-right" title="قراءة" >{e.name}</button>
     </div>
    </div>
  ));

const [Render,SetRender] = useState("")
 const paragraph = useRef();
  useEffect(() => {
    let i = localStorage.getItem("number")||0
    setInterval(() => {
      if (i < Azkar.length) {
        localStorage.setItem("zkr", JSON.stringify(Azkar[i].zekr));
        SetRender(JSON.parse(localStorage.getItem("zkr")))
        i++;
        localStorage.setItem("number",i)
      } else if (i === Azkar.length) {
        i = 0;
      }
    }, 60000)
    if(JSON.parse(localStorage.getItem("zkr"))==""){
      paragraph.current.innerHTML = "أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر."
    }else if(JSON.parse(localStorage.getItem("zkr"))!=""){
      paragraph.current.innerHTML = JSON.parse(localStorage.getItem("zkr"))||"أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر."
    }else{
       paragraph.current.innerHTML = "أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر."
    }
  },[Render]);

  return (
    <>
    <div ref={ContainerOfSoar} className='Container_Soar'>
    {Loading?<p>...يتم تحميل السورة</p>:
 SoraClickAR.map(function(e){
   return <>
   <button key={NumSora} ref={BtnSoar} onClick={()=>ContainerOfSoar.current.style.display = "none"}><FontAwesomeIcon icon={faTimes} style={{ fontSize: "30px", color: "white",padding:"2px 5px"}} /></button>
   <p key={NumSora}>{e.text} <span>({e.number_in_surah})</span></p>
   </>
  })
}
  </div>
     <div className='TodayHadees'>
       <h4>ذِكر اليوم:</h4>
       <p ref={paragraph}></p> 
     </div>
     <div className='options'>
      <Link className='A-1' to="/ListenReadQuran"><span className='sp-1'>القرأن الكريم</span><span>استماع للقرأن الكريم</span></Link> 
      <Link className='A-2' to="/Ahades"><span className='sp-1'>السنة النبوية</span><span>أحاديث النبي عليه الصلاة والسلام</span></Link> 
      <Link className='A-3' to="/Azkar"><span className='sp-1'>الأذاكار</span><span>قراءة الأذكار</span></Link> 
      <Link className='A-4' to="/PrayersTime"><span className='sp-1'>أوقات الصلاة</span><span>وقت الصلاة حسب موقعي</span></Link> 
     </div>
      <div className='header'>
        <div className='image_container'>
          <img src={header_image} alt="header_image" />
        </div>
      </div>
      <div className='Soar_container'>
        {elements}
      </div>
    </>
  );
}
