export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const SAVE_RESULT = 'SAVE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = (payload) => {
    return {
        type: ADD,
        payload: payload
    }
}

export const subtract = (payload) => {
    return {
        type: SUBTRACT,
        payload: payload
    }
}

export const saveResult = (value) => {
    return {
        type: SAVE_RESULT,
        ctrValue: value
    }
}  

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        itemToDelete: id
    }
}