

export let depositFun=()=>{
    return {
        type:"DEPOSIT",
        payload : 6000
    }
}

export let withdrawFun=()=>{
        return {
            type:"WITHDRAW",
            payload : 4000
        }
}

// these actions will get dispactched from component.