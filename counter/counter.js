const { createStore } = require("redux")

//Intial state
const initialState = {
    count: 0
}


//Action creator

const incrementAction = () =>{
    return{
        type:"INCREMENT"
    }
}

const decrementAction = () =>{
    return{
        type:"DECREMENT"
    }
}

const resetAction = () =>{
    return{
        type:"RESET"
    }
}

const increaseByAmtAction = (anyAmount) =>{
    return{
        type:"INCREASE_BY_AMT",
        payload: anyAmount
    }
}



//Reducer

const counterReducer = (state= initialState, action) =>{
    if(action.type === "INCREMENT"){
        return{
            count: state.count +1
        }
    }else if (action.type === "DECREMENT"){
        return{
            count: state.count -1
        }
    }else if(action.type === "RESET"){
        return{
            count:0
        }
    }else if(action.type === "INCREASE_BY_AMT"){
        return{
            count:state.count + action.payload
        }
    }

}


//Store

const store = createStore(counterReducer)

//subscribe to store

store.subscribe(() => {
    const data = store.getState()
    console.log(data)
})

//Dispatch

store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(resetAction())
store.dispatch(increaseByAmtAction(10))
