//Istilah-istilah pd redux

//Store => wadah untuk menyimpan value/global state
//Reducer => untuk melakukan update store
//Subscription => listening ketika store terjadi perubahan
//Dispatching action => proses pemanggilan reducer



const redux = require('redux') //ini buat gantiin importnya aja

const createStore = redux.createStore

const initialState={
    name : "Miftah",
    age : 23
}


//bikin reducer
const rootReducer =(state=initialState,action)=>{
    if (action.type==="ADD_AGE"){
        return{
            ...state,
            age : state.age+1
        }
    }
    if (action.type==="CHANGE_NAME"){
        return{
            ...state,
            name : action.newName
        }
    }
    return state
}

//bikin store
const store = createStore(rootReducer)

//subscriction  setiap kali ada dispatch di jalanin, ini hrs sblm dispatch krn kan dengerin dulu baru 
store.subscribe(()=>{
    console.log("STORE CHANGE",store.getState());
})


// console.log("BEFORE DISPATCH: ", store.getState());

//dispatching action
store.dispatch(
    {
        type: "ADD_AGE" //convention untuk type itu emg snakecase+uppercase (SCREAMING_SNAKE_CASE)
    }
)

// console.log("AFTER ADD_AGE: ",store.getState());

store.dispatch(
    {
        type:"CHANGE_NAME",
        newName:"Ayu"
    }
)
// console.log("AFTER CHANGE_NAME: ",store.getState());




