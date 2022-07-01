import { combineReducers } from "redux";
import updateCounter from "./CounterReducer";

let rootReducer=combineReducers({updateCounter});

export default rootReducer;