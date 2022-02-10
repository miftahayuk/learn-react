import ActionTypeReduxHooks from "./ActionTypeRedux-Hooks"

const initialState={
    nilai : 5,
    todos :[{
        todo: "Belajar",
        desc:"Belajar Programming"
    }]
}

const counterReducer =(state=initialState,action)=>{
    switch(action.type){
        case ActionTypeReduxHooks.PLUS:{
            return{
                ...state,
                nilai : state.nilai+1
            }
        }
        case ActionTypeReduxHooks.MINUS:{
            return{
                ...state,
                nilai : state.nilai-1
            }
        }

        case ActionTypeReduxHooks.ADD:{
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
        }

        default : return state
    }
   
}

export default counterReducer