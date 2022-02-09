import { Component } from 'react'
import RootContext from './RootContextTodo';


class ToDoList extends Component {
    render() {
        return (
             <RootContext.Consumer>
                 {
                    (value) => {
                        return (
                            <>
                                {value.state.List.map((list, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <th scope="row">{idx + 1}</th>
                                          
                                            {/* <td >{list.title}</td>
                                            <td>{list.desc}</td> */}
                                            {list.cond ? <td><del>{list.title}</del></td>:<td>{list.title}</td>}
                                            {list.cond ? <td><del>{list.desc}</del></td>:<td>{list.desc}</td>}
                                            <td>
                                                <button
                                                onClick={() => {
                                                    value.dispatch({ type: 'DELETE', index: idx })
                                                }}
                                                >Delete
                                                </button>
                                                   
                                                <button
                                                onClick={()=>{
                                                    value.dispatch({type:'CROSS_LINE', selectedTitle:list.title})
                                                }}
                                                >
                                                Coret
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </>
                        )
                    }
                 }
             </RootContext.Consumer>
        )
    }
} export default ToDoList;