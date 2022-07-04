
import './App.css';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { incrementFun,decerementFun } from './Actions/CounterActions';
import  {depositFun,withdrawFun} from './Actions/AccountAction';
function App() {
  let myState=useSelector((store)=>store.updateCounter);
  let balance=useSelector((store)=>store.updateBalance);
  let dispatch=useDispatch();

  return (
    <div className="App">
    <div>
      <h3>COUNTER STATE</h3>
     <b>{myState}</b><br></br>
     <button onClick={()=>dispatch(incrementFun())}>+</button>
     <button onClick={()=>dispatch(decerementFun())}>-</button>
    </div>
    <hr></hr>
    <div>
      <h3>ACCOUNT STATE</h3>
    </div>
    <i>{balance}</i> <br></br>
    {/* take user input for deposit amount and withdraw amount. using useState */}
    <button onClick={()=>dispatch(depositFun(7000))}>DEPOSIT</button>
    <button onClick={()=>dispatch(withdrawFun(4000))}>WITHDRAW</button>
    </div>
  );
}

export default App;
