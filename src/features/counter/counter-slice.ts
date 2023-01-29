import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"

type CounterProps = {
    value: number
}

const initialState: CounterProps = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value++
        },
        multiply: (state, action: PayloadAction<number>) => {
            state.value = state.value * action.payload
        },
        set: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        },
    },
})

export const { increment, multiply, set } = counterSlice.actions

export const counterReducer = counterSlice.reducer
