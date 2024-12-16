import React,{useState,useEffect} from 'react';
import '../Css_Files/PrayersTime.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,faMoon } from '@fortawesome/free-solid-svg-icons';
import Citys from '../Apis/Citys';

export default function PrayersTime() {
  const [PrayerTime,SetPrayerTime] = useState([]);
  const [CitysEgypt,SetCitysEgypt] = useState("");

  const Options =  Citys.EgyptGovernorates.map(function(e){
    return <option value={e.name_ar} key={e.id}>{e.name_ar}</option>
  })

  useEffect(function(){
    fetch(`https://api.aladhan.com/v1/timingsByCity/12-12-2024?city=${CitysEgypt||localStorage.getItem("Citys")}&country=EG`)
    .then((response)=>response.json())
    .then((Data)=>SetPrayerTime(Data.data.timings))
  },[CitysEgypt])

const Days = ["السبت","الأحد","الأثنين","الثلاثاء","الأربع","الخميس","الجمعة"];
const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];


const NumOfDay = new Date();
const Week = NumOfDay.getDay();
const month = NumOfDay.getMonth();
const Year = NumOfDay.getFullYear();
const DayInMounth = NumOfDay.getDate();
const [Day,SetDay] = useState("");
const [Month,SetMouth] = useState("");

useEffect(function(){
SetDay(Days[Week])
SetMouth(months[month])
},[Week,Month])
  return (
    <>
     <div className='ContainerAll'>
      <h1>أوقات الصلاة:</h1>
    <div className='Top_Container'>
     <p>{CitysEgypt||"القاهرة"}</p>
     <select onChange={(e)=>{SetCitysEgypt(e.target.value)}}>
      {Options}
     </select>
    </div>
    <div className='Date'>
      <p style={{border:"none"}}>{Day}</p>
      <p style={{border:"none"}}>{DayInMounth}</p>
      <p style={{border:"none"}}>{Month}</p>
      <p style={{border:"none"}}>{Year}</p>
     </div>
     <div className='Times_Container'>
      <div className='Times'>
       <p>{PrayerTime.Fajr}</p>
       <p>{PrayerTime.Sunrise}</p>
       <p>{PrayerTime.Dhuhr}</p>
       <p>{PrayerTime.Asr}</p>
       <p>{PrayerTime.Maghrib}</p>
       <p>{PrayerTime.Isha}</p>
      </div>
      <div className='Name'>
       <p>الفجر</p>
       <p>الشروق</p>
       <p>الظهر</p>
       <p>العصر</p>
       <p>المغرب</p>
       <p>العشاء</p>
      </div>
      <div className='Icons'>
       <p><FontAwesomeIcon icon={faSun} style={{ fontSize: '28px' }} /></p>
       <p> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"></path></svg></p>
       <p><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path></svg></p>
       <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M6.341 14A6 6 0 1 1 12 18v-4H6.341zM6 20h9v2H6v-2zm-5-9h3v2H1v-2zm1 5h8v2H2v-2zm9-15h2v3h-2V1zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3z"></path></svg></p>
       <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><circle cx="12" cy="12" r="5" fill="black" /><path d="M1 12h22M4.929 4.929l1.414 1.414M19.071 4.929l-1.414 1.414M1 19h22M4.929 19.071l1.414-1.414M19.071 19.071l-1.414-1.414M12 1v2M12 21v2" stroke="black" strokeWidth="2" /></svg></p>
       <p><FontAwesomeIcon icon={faMoon} style={{ fontSize: '28px' }} /></p>
      </div>
     </div>
    </div>
    </>
  )
}



