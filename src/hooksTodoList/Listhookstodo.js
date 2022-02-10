const ListHooks=(props)=>{

  const addForm =()=>{
    props.callbackMove(true)
  }

  const handleDelete=(title)=>{
    props.callbackRemove(title)
  }

  return(
    <>
    <h1>To Do List</h1>
        <br />
        <button onClick={addForm}>
          Add To Do
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">To Do</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.listTodos.length ? (
              props.listTodos.map((todo, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td><button onClick={handleDelete}>Delete</button></td>
                    <td><button onClick={addForm}>Update</button></td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <p>No Menu Available</p>
              </tr>
            )}
          </tbody>
        </table>
      </>
  )
}

export default ListHooks