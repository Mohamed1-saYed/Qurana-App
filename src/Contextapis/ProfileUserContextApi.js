import React from 'react';
import { createContext } from 'react';
import { useState,useEffect } from 'react';
export const UserData = createContext()

export default function ProfileUserContextApi({children}) {
    const [Data,SetData] = useState("");
    const [ImageProfile,SetImage] = useState("");
    const [DisplayNone,SetDisplayNone] = useState("");
    useEffect(function(){
      SetData(localStorage.getItem("NameProfile"));
      SetImage(localStorage.getItem("ImageProfile"));
     },[])
  return (
    <UserData.Provider value={{Data,SetData,ImageProfile,SetImage,DisplayNone,SetDisplayNone}}>
      {children}
    </UserData.Provider>
  )
}
