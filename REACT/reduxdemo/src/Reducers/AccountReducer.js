
import {myAccount}  from '../DATA/Account';

let updateBalance=(state=myAccount.balance,action)=>{
        console.log("State coming at reducer:"+state);
        console.log("Action  coming at reducer:"+action.type);
        if(action.type==='DEPOSIT'){
                console.log("Deposit amount:"+action.payload);
                 return state+action.payload;
        }
        else if(action.type==='WITHDRAW'){
                console.log("Withdraw amount:"+action.payload);
                return state-action.payload
        }
        else{
                return state;
        }
}

export default updateBalance;