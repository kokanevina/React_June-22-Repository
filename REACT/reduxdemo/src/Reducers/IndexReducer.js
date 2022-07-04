import { combineReducers } from "redux";
import updateCounter from "./CounterReducer";
import updateBalance from './AccountReducer';
let rootReducer=combineReducers({updateCounter,updateBalance});

export default rootReducer;