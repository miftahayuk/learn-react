
const ToDoList = (props) => {

    const addForm = () => {
        props.updateValue(true, "form")
        props.updateValue(false, "addData")
        props.updateValue(true, "updateData")
        props.updateValue(null, "setId")
    }

    const deleteToDoList = (id) => {
        if (window.confirm("Are you sure want to delete?")) {
            let toDos = props.toDoList.filter((e, idx) => {
                return idx !== id
            })
            props.updateValue(toDos, "todos")
        }
    }

    const updateToDo = (id) => {
        props.updateValue(true, "form")
        props.updateValue(true, "addData")
        props.updateValue(false, "updateData")
        props.updateValue(id, "setId")
        
    }
    return(
        <>
        <button onClick={addForm}>Add To Do</button>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">To Do</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    (props.toDoList.length) ?
                    props.toDoList.map((toDo, idx) => {
                        return (
                            <tr key={idx}>
                                <th scope="row">{idx+1}</th>
                                <td>{toDo.toDo}</td>
                                <td>{toDo.description}</td>
                                <td><button onClick={() => updateToDo(idx)}>Update</button></td>
                                <td><button onClick={() => deleteToDoList(idx)}>Delete</button></td>
                            </tr>
                        )
                    }) : <p>No Value Available</p>}
            </tbody>
        </table>
        </>
    )
}

export default ToDoList