import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';

function App() {
  return (
    <div className="App">
     <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homescreen/>}></Route>
        <Route path='/book/:roomid' element={<Bookingscreen/>}></Route>
        <Route path='/register' element={<Registerscreen/>}></Route>
        <Route path='/login' element={<Loginscreen/>}></Route>
      </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;
