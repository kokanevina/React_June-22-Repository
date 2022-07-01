
import './App.css';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { incrementFun,decerementFun } from './Actions/CounterActions';
function App() {
  let myState=useSelector((store)=>store.updateCounter);
  console.log(myState);
  let dispatch=useDispatch();
  let incr=()=>{
    dispatch(incrementFun());
  }
  return (
    <div className="App">
     <b>{myState}</b><br></br>
     <button onClick={incr}>+</button><button onClick={()=>dispatch(decerementFun())}>-</button>
    </div>
  );
}

export default App;
