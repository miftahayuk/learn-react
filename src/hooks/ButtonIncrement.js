

const ButtonIncrement=(props)=>{

    const increment=()=>{
        let result = props.number+1
        props.callback(result)
    }
    return(
        <>
        {/* {props.number} */}
        <br/>
        <button onClick={increment} >PLUS</button>
        </>
    )
}

export default ButtonIncrement