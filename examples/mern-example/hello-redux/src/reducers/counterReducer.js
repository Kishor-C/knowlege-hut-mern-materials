// initial state
const initialState = { counter : 0 }

// reducer function: previous state & action, returns new state
// action will have different types like 'incr', 'decr'
export function counterReducer(state = initialState, action) {
    
    switch(action.type) {
        case 'INCREMENT':
            return {counter: state.counter + 1};
        case 'DECREMENT': 
            return {counter: state.counter - 1};
        
        default:
            return state;
    }
}