import { useDispatch } from "react-redux"
import ActionTypeReduxHooks from "../ActionTypeRedux-Hooks"

const IncrementButton=()=>{
    const dispatch = useDispatch()

    return(
        <>
        <button onClick={()=>dispatch({type: ActionTypeReduxHooks.PLUS})}>+</button>
        </>
    )
}

export default IncrementButton