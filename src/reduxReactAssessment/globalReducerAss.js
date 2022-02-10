import ActionTypeTodo from "./globalActionTodo"
const initialState={
    todos:[],
    addForm : false
}

const reducerTodoListHooks=(state=initialState, action)=>{
    switch (action.type){
        case ActionTypeTodo.ADD_TODO:
            return{
                ...state,
                todos:[...state.todos, action.payload],
            }
        case ActionTypeTodo.DELETE_TODO:
            return{
                ...state,
                todos: state.todos.filter(todo=>todo.id!==action.payload)
            }
        case ActionTypeTodo.CHANGEADDFORM:
            return{
                ...state,
                addForm : action.condition
            }
        default:
            return state;
    }
}

export default reducerTodoListHooks
