
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { AllUsers } from './Components/AllUsers';
import { UpdateUser } from './Components/UpdateUser';
function App() {
  return (
   <>
   <Navbar></Navbar>
   <Routes>
    <Route path='allusers' element={<AllUsers></AllUsers>}></Route>
    <Route path='edituser/:uid' element={<UpdateUser></UpdateUser>}></Route>
   </Routes>
   </>
  );
}

export default App;
