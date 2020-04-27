import React, {useState, useEffect, useReducer, useContext} from 'react'
import * as Reducer from './../store/hooks_state/hooks_reducer'
import * as ACTIONS from './../store/actions/actions';
import Context from './../utils/Context'

const Hookscontainer1 = () => {
    const context = useContext(Context)
    //const stateValue = useState(0)[0]
    //const setValue = useState(0)[1]
    const[stateValue, setValue] = useState(0)
    const[useEffectValue, setUseEffectValue] = useState(null)
    const[state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)
    useEffect(() => {
        setTimeout(()=>
            setUseEffectValue("UseEffect Worked"),
            3000)
    },[stateValue])

    const incrementValue = () => {
        setValue(stateValue + 1)
    }
    const decrementValue = () => {
        setValue(stateValue - 1)
    }
    const changeUseEffect = () => {
        setUseEffectValue("Some new String")
    }
    const handleDispatchTrue = () => {
        dispatch(ACTIONS.SUCCESS)
    }
    const handleDispatchFalse = () => {
        dispatch(ACTIONS.FAILURE)
    }
    return(
        <div>
            Hooks Container
            <br/>
            <button onClick={()=>incrementValue()}> Increment Local State </button>
            <button onClick={()=>decrementValue()}> Decrement Local State </button>
            <br/>
            <button onClick={()=>changeUseEffect()}> Change Use Effect </button>
            <br/>
            <button onClick={()=>handleDispatchTrue()}> Dispatch True </button>
            <button onClick={()=>handleDispatchFalse()}> Dispatch False </button>
            <br/>
            <button onClick={()=>context.addGlobalValue()}> Add Global State </button>
            <button onClick={()=>context.decGlobalValue()}> Decrement Global State </button>
            <br/>
            {useEffectValue ? 
                <p>{useEffectValue} </p> 
                : <p> No Value </p>
                }
                <br />

            <p>Local State: {stateValue} </p>
            <br/>
            {state.stateProp1 ?
            <p>  stateProp1 is true </p>
            : <p> stateProp1 is false </p>
            }
            <br/>
            <p> Global State: {context.valueGlobalState}</p>
        </div>
    )
}

export default Hookscontainer1;