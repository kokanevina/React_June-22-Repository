
let initialState=0;

let updateCounter=(state=initialState,action)=>{
        console.log(state);
        console.log(action.type);
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