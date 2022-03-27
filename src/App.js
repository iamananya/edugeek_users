
import './App.css';
import Adminpage from './components/Adminpage';
import Navtop from './components/Navtop';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timetable from './components/Timetable';
import Chat from './components/Chat';
import Batch from './components/Batch';
function App() {
  return (
    <div className="App">
      <Navtop/>
      {/* <Adminpage/> */}
      <BrowserRouter>
      <Routes>
          <Route path="/batches" element={<Adminpage/>} />
          <Route path="/timetable" element={<Timetable/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/batch" element={<Batch/>} />

            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
