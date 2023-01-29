import { createStore } from "redux"



type StateProps = {
    count: {
        value: number,
    },
}
const initialState = {
    count: {
        value: 29,
    },
}

function reducer<StateProps>(state = initialState, { payload, type }) {
    switch (type) {
        case "counter/MULTIPLY":
            return { ...state, count: { value: state.count.value * payload } }
        case "counter/INCREMENT_COUNTER":
            return { ...state, count: { value: state.count.value + 1 } }
        case "counter/SET_COUNTER":
            return { ...state, count: { value: payload } }
        default:
            return state
    }
}
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
