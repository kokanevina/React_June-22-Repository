
import {myAccount}  from '../DATA/Account';

let updateBalance=(state=myAccount,action)=>{
        console.log("State coming at reducer:"+state);
        console.log("Action  coming at reducer:"+action.type);
        if(action.type==='DEPOSIT'){
                 myAccount.balance=myAccount.balance+action.payload;
                 return myAccount;
        }
        else if(action.type==='WITHDRAW'){
            myAccount.balance=myAccount.balance-action.payload;
            return myAccount;
        }
        else{
                return myAccount;
        }
}

export default updateBalance;