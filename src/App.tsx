import { useDispatch } from "react-redux/es/hooks/useDispatch"
import "./App.css"
import reactLogo from "./assets/react.svg"
import { increment, multiply, set } from "./features/counter/counter-slice"
import { useAppSelector } from "./hooks"

function App() {
    const { counter } = useAppSelector((state) => state)
    console.log({ counter })
    const dispatch = useDispatch()

    // const handle = {
    //     increment: () => dispatch({ type: "counter/INCREMENT_COUNTER" }),
    //     multiply: (payload) => dispatch({ type: "counter/MULTIPLY", payload }),
    //     set: (payload) => dispatch({ type: "counter/SET_COUNTER", payload }),
    // }

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => dispatch(increment())}>count is {counter.value}</button>
                <button onClick={() => dispatch(multiply(2))}>multiply {counter.value}</button>
                <button onClick={() => dispatch(set(10))}>set {counter.value}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </div>
    )
}

export default App

// const mapStateToProps = (state) => ({
//     count: state.count.value,
// })

// const mapDispatchToProps = (dispatch) => ({
//     increment: () =>
//         dispatch({
//             type: "counter/INCREMENT_COUNTER",
//         }),
//     multiply: () =>
//         dispatch({
//             type: "counter/MULTIPLY",
//             payload: 2,
//         }),
//     set: (newCount) => dispatch({ type: "counter/SET_COUNTER", payload: newCount }),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App)
