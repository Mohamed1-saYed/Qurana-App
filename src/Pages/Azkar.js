import React,{useState,useEffect, use} from 'react';
import '../Css_Files/Azkar.css';

import AllAzkar from '../Apis/AllAzkar';

export default function Azkar() {

    const Element = AllAzkar[0].morning_azkar.map(function(e){
        return <div><p className='Azkar_Alsbah_P'>{e.text}</p> <p className='Num'>{e.id}</p></div>
    })

    const AzkarAlmasaa = AllAzkar[0].evening_azkar.map(function(e){
        return <div><p className='AzkarAlmasaa_P'>{e.text}</p> <p className='Num'>{e.id}</p></div>
    })

    const Azkar_Alsalah = AllAzkar[0].prayer_azkar.map(function(e){
        return <div><p className='Azkar_Alsalah_P'>{e.text}</p> <p className='Num'>{e.id}</p></div>
    })

    const Azkar_Almasged = AllAzkar[0].mosque_azkar.map(function(e){
        return <div><p className='Azkar_Almasged_P'>{e.text}</p> <p className='Num'>{e.id}</p></div>
    })

    const Azkar_Alazan = AllAzkar[0].adhan_azkar.map(function(e){
        return <div><p className='Azkar_Alazan_P'>{e.text}</p> <p className='Num'>{e.id}</p></div>
    })

  return (
   <div className='Container_All'>
     <h1>الأذكار</h1>
    <div className='Azkar_Alsbah'>
     <div className='Top_Sec'>
      <p style={{color: "black", fontWeight: "700", fontSize: "20px"}} >أذكار الصباح</p>
     </div>
     <div className='Middle_Sec'>
      {Element}
     </div>
    </div>
    <div className='Azkar_Almmasaa'>
     <div className='Top_Sec'>
      <p style={{color: "black", fontWeight: "700", fontSize: "20px"}} >أذكار المساء</p>
     </div>
     <div className='Middle_Sec'>
      {AzkarAlmasaa}
     </div>
    </div>
    <div className='Azkar_Alsalah'>
     <div className='Top_Sec'>
      <p style={{color: "black", fontWeight: "700", fontSize: "20px"}} >أذكار الصلاة</p>
     </div>
     <div className='Middle_Sec'>
      {Azkar_Alsalah}
     </div>
    </div>
    <div className='Azkar_Almasged'>
     <div className='Top_Sec'>
      <p style={{color: "black", fontWeight: "700", fontSize: "20px"}} >أذكار بعد الصلاة</p>
     </div>
     <div className='Middle_Sec'>
      {Azkar_Almasged}
     </div>
    </div>
    <div className='Azkar_Alazan'>
     <div className='Top_Sec'>
      <p style={{color: "black", fontWeight: "700", fontSize: "20px"}} >أذكار الأذان</p>
     </div>
     <div className='Middle_Sec'>
      {Azkar_Alazan}
     </div>
    </div>
   </div>
  )
}
