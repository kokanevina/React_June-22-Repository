
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { AllUsers } from './Components/AllUsers';
import { UpdateUser } from './Components/UpdateUser';
import { AddUser } from './Components/AddUser';
function App() {
  return (
   <>
   <Navbar></Navbar>
   <Routes>
    <Route path='allusers' element={<AllUsers></AllUsers>}></Route>
    <Route path='edituser/:uid' element={<UpdateUser></UpdateUser>}></Route>
    <Route path='add' element={<AddUser></AddUser>}></Route>
   </Routes>
   </>
  );
}

export default App;
