
let initialState=0;

let updateCounter=(state=initialState,action)=>{
        console.log("State coming at reducer:"+state);
        console.log("Action  coming at reducer:"+action.type);
        if(action.type==='INCREMENT'){
                return state+1;
        }
        else if(action.type==='DECREMENT'){
                return state-1
        }
        else{
                return state;
        }
}

export default updateCounter;