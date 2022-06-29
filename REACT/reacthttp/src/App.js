import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { AllUsers } from './Components/AllUsers';
function App() {
  return (
   <>
   <Navbar></Navbar>
   <Routes>
    <Route path='allusers' element={<AllUsers></AllUsers>}></Route>
   </Routes>
   </>
  );
}

export default App;
