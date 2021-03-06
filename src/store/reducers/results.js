import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.SAVE_RESULT:
          return {
              ...state,
              results: state.results.concat({id: new Date(), value: action.ctrValue})
          }
        case actionTypes.DELETE_RESULT:
           const updatedResults = state.results.filter(result => {
                return result.id !== action.itemToDelete
           });
           return {
               ...state,
               results: updatedResults
           }
    }
    return state;
}  

export default reducer;