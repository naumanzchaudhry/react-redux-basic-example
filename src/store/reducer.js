const initialState = {
    counter: 0, 
    n: 1
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case ('INCREMENT'):
          return {
              counter: state.counter + 1
          }
        case ('DECREMENT'):
          return {
              counter: state.counter -1 ,
              n: state.n - 10
          }
        case ('ADD'):
          return {
              counter: state.counter + action.payload.value 
          }
        case ('SUBTRACT'):
          return {
              counter: state.counter - action.payload.value
          }
    }
    return state;
}  

export default reducer;