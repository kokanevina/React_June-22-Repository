import { createStore } from "redux";
import rootReducer from './Reducers/IndexReducer';
let myStore=createStore(rootReducer);
export default myStore;