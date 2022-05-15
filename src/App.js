
import './App.css';
import Adminpage from './components/Adminpage';
import Navtop from './components/Navtop';
import Login from "./components/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timetable from './components/Timetable';
import Batch from './components/Batch';
import React, { useState } from 'react';
import SignUp from './components/SignUp';
import Coupons from './components/Coupons';
import StudyMaterial from './components/StudyMaterial';
import Notif from './components/Notif';
import Students from './components/Students';
function App() {
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken : <Login/>} />
  // }
  return (
    
    <div className="App" style={{backgroundColor:"#daebe1"}}>
      <BrowserRouter>
      <Navtop/>
      {/* <Adminpage/> */}
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<SignUp/>}/>
          <Route path="/batches" element={localStorage.getItem("edugeek-authorized") === "1" ? <Adminpage/> : <Login/>} />
          <Route path="/coupons" element={localStorage.getItem("edugeek-authorized") === "1" ? <Coupons/> : <Login/>} />
          <Route path="/timetable" element={localStorage.getItem("edugeek-authorized") === "1" ? <Timetable/> : <Login/>} />
  
          <Route path="/batch" element={localStorage.getItem("edugeek-authorized") === "1" ? <Batch/> : <Login/>} />
          <Route path="/material" element={localStorage.getItem("edugeek-authorized") === "1" ? <StudyMaterial/> : <Login/>} />
          <Route path="/notif" element={localStorage.getItem("edugeek-authorized") === "1" ? <Notif/> : <Login/>}/>
          <Route path="/profiles" element={localStorage.getItem("edugeek-authorized") === "1" ? <Students/> : <Login/>}/>

            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
