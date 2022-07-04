
import './App.css';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { incrementFun,decerementFun } from './Actions/CounterActions';
function App() {
  let myState=useSelector((store)=>store.updateCounter);
  let account=useSelector((store)=>store.updateBalance);
  console.log(myState);
  let dispatch=useDispatch();
  let incr=()=>{
    dispatch(incrementFun());
  }
  return (
    <div className="App">
    <div>
      <h3>COUNTER STATE</h3>
     <b>{myState}</b><br></br>
     <button onClick={incr}>+</button><button onClick={()=>dispatch(decerementFun())}>-</button>
    </div>
    <hr></hr>
    <div>
      <h3>ACCOUNT STATE</h3>
    </div>
    <b>{account.balance}</b><br></br>
    <button>DEPOSIT</button><button>WITHDRAW</button>
    </div>
  );
}

export default App;
