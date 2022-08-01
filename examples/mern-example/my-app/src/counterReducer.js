let initialState = {counter : 0}

// reducer function: provides a logic to work with the state
// reducer takes previous state & action & returns the new state
// action is an object with type of action and payload
// action = {type, payload}, type means whether create, update, delete, and so on
// payload means the data coming from the UI, we can use type.action & type.payload
export function counterReducer(state = initialState, action) {
    // dispatcher will pass an action with a type {type = "INCREMENT"} or {type = "DECREMENT"}
    switch(action.type) {
        case 'INCREMENT': 
            return {counter : state.counter + 1};
        case 'DECREMENT': 
            return {counter : state.counter - 1};
        default: 
            return state;
    }
}