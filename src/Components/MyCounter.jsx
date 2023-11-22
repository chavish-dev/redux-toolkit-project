import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add,add5 } from "../Store/CounterSlice";
const MyCounter = ()=>{
debugger

 const myCnt = useSelector(x=>x.counterSlice.cnt)
   const dispatch = useDispatch()
    return(
        <>
        <p>{myCnt}</p>
        <button onClick={() => dispatch(add())}>
            +
        </button>

        <button onClick={() => dispatch(add5({addCustom:5}))}>
            +5
        </button>
        </>
    )
}

export default MyCounter