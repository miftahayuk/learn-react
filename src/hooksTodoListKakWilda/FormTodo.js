import { useState } from 'react';

const ToDoForm = (props) => {
    let valueToDo = ''
    let valueDesc = ''
    if (props.id !== null) {
        valueToDo = props.toDoList[props.id].toDo
        valueDesc = props.toDoList[props.id].description
    }
    
    const [toDo, setToDo] = useState(valueToDo)
    const [description, setDesc] = useState(valueDesc)
    
    const handleToDo = (e) => {
        setToDo(e.target.value)
    }

    const handleDesc = (e) => {
        setDesc(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault() 
        let newToDo = [...props.toDoList, {toDo: toDo, description: description}]
        props.updateValue(newToDo, "todos")
        props.updateValue(false, "form")
    }

    const update = (id) => {
        props.toDoList[id].toDo = toDo
        props.toDoList[id].description = description
        let newToDo = [...props.toDoList]
        props.updateValue(newToDo, "todos")
        props.updateValue(false, "form")
    }

    const cancelAdd = (e) => {
        props.updateValue(false, "form")
    }

    console.log(props)
    return(
        <>
            <form onSubmit={(e) => submit(e)}>
                <div className="mb-3">
                    <label htmlFor="toDo" className="form-label">To Do</label>
                    <input type="text" className="form-control" name="toDo" onChange={(e) => handleToDo(e)} value={toDo} placeholder="enter to do"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" name="description" onChange={(e) => handleDesc(e)} value={description} placeholder="enter description"/>
                </div>
                <button  className="btn btn-warning" onClick={cancelAdd}>Cancel</button>
                <button onClick={() => update(props.id)} className="btn btn-primary" disabled={props.updateData}>Update</button>
                <button type="submit" className="btn btn-primary" disabled={props.addData}>Submit</button>
            </form>
        </>
    )
}
export default ToDoForm