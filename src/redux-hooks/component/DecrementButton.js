import { useDispatch } from "react-redux"
import ActionTypeReduxHooks from "../ActionTypeRedux-Hooks"

const DecrementButton=()=>{
    const dispatch = useDispatch()

    return(
        <>
        <button onClick={()=>dispatch({type: ActionTypeReduxHooks.MINUS})}>-</button>
        </>
    )
}

export default DecrementButton