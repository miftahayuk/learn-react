const ButtonDecrement=(props)=>{

    const decrement=()=>{
        if(props.number>0){
        let result = props.number-1
        props.callback(result)
        }
    }
    return(
        <>
        <br/>
        <button onClick={decrement} >MINUS</button>
        </>
    )
}

export default ButtonDecrement