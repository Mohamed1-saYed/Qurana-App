import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import RadioLive from './Pages/RadioLive';
import ListenReadQuran from './Pages/ListenReadQuran';
import PrayersTime from './Pages/PrayersTime';
import Azkar from './Pages/Azkar';
import Ahades from './Pages/Ahades';
import Sepha from './Pages/Sepha';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import ProfileUserContextApi from './Contextapis/ProfileUserContextApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileUserContextApi>
    <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/PrayersTime' element={<PrayersTime/>}/>
      <Route path='/ListenReadQuran' element={<ListenReadQuran/>}/>
      <Route path='/RadioLive' element={<RadioLive/>}/>
      <Route path='/Azkar' element={<Azkar/>}/>
      <Route path='/Ahades' element={<Ahades/>}/>
      <Route path='/Sepha' element={<Sepha/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </ProfileUserContextApi>
  </React.StrictMode>
);
reportWebVitals();
