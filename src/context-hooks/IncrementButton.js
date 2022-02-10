import { useContext } from "react"
import { RootContext } from "../App"
import ActionTypeReduxHooks from "../redux-hooks/ActionTypeRedux-Hooks";

const IncrementButton=()=>{
    const dataInc = useContext(RootContext)

    console.log("dataInc",dataInc);
    return(
        <>
        {dataInc.value.nilai}
        <button onClick={()=>dataInc.dispatch({type:ActionTypeReduxHooks.PLUS})} >+</button>
        </>
    )
}

export default IncrementButton