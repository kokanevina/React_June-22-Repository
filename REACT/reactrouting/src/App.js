import { Header } from "./Components/Header";
import {Routes,Route} from 'react-router-dom';
import {Home} from './RoutingComponents/Home';
import {Login} from './RoutingComponents/Login';
import {Employees} from './RoutingComponents/Employees';
import { Register } from "./RoutingComponents/Register";
import { UpdateEmployee } from "./RoutingComponents/UpdateEmployee";
function App() {
  return (  
    <>
     <Header></Header> 
    <div style={{border:'2px solid red'}}>
    <Routes>
      <Route element={<Home></Home>} path='/'></Route>
      <Route element={<Home></Home>} path='home'></Route>
      <Route element={<Login></Login>} path='login' ></Route>
      <Route element={<Register></Register>} path='register' ></Route>
      <Route element={<Employees></Employees>} path="employees"></Route>
      <Route element={<UpdateEmployee></UpdateEmployee>} path="editemp/:eid"></Route>
    </Routes>
    </div>
    </>
   
  );
}

export default App;
