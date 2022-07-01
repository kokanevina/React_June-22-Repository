import { createStore } from "redux";
import rootReducer from './Reducers/IndexReducer';
let myStore=createStore(rootReducer);
console.log(myStore.getState());
export default myStore;