import './App.css';
import Navbar from  './Components/Navbar';
import Home from './Components/Home';
import AllUsers from './Components/AllUsers';
import {Route, Routes } from 'react-router-dom';
import EditUser from './Components/EditUser';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home></Home>}  />
        <Route path="all" element={<AllUsers></AllUsers>}  />
        {/* <Route path="/add" component={AddUser} exact /> */}
        <Route path="edit/:uid" element={<EditUser></EditUser>}  />
       {/*} <Route component={NotFound} /> */}
      </Routes>
      </>
  );
}

export default App;

