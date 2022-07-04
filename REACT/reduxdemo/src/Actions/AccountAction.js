

export let depositFun=(deptamt)=>{
    return {
        type:"DEPOSIT",
        payload : deptamt
    }
}

export let withdrawFun=(withamt)=>{
        return {
            type:"WITHDRAW",
            payload : withamt
        }
}

// these actions will get dispactched from component.