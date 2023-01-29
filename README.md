## 1. Adicionar um valor inicial ao state global:
`src/features/counter-slice.ts`
```typescript
type  CounterProps  = {
    value:  number
}

const initialState: CounterProps = {
    value: 0,
}
```

## 2. Definir as propriedades desse slicer, como estados iniciais e funções (reducers)
`src/features/counter-slice.ts`
```typescript
import { createSlice } from "@reduxjs/toolkit"

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
```

## 3. Exportar as actions desse slice
Essa linha faz com que as funções desse slice fiquem públicos para qualquer componente que quiser importar e usar
`src/features/counter-slice.ts`
```typescript
export const { increment, multiply, set } = counterSlice.actions
```

## 4. Exportar o reducer desse slice
Essa linha libera o reducer desse slice para ser usado no store
`src/features/counter-slice.ts`
```typescript
export const counterReducer = counterSlice.reducer
```

## 5. Criar a store
Esse código instancia a store e declara seus reducers
`src/store.ts`
```typescript
import { configureStore } from "@reduxjs/toolkit"
import { counterReducer } from "./features/counter/counter-slice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})
```

## 6. Definir a tipagem do store de forma automática
`src/store.ts`
```typescript
export type RootState = ReturnType<typeof store.getState>
```
## 7. Exportar o hook de uso dos states desse store
`src/store.ts`
```typescript
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
```

## 8. Prover os dados do store para a aplicação
`src/main.tsx`
```tsx
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
```



## 9. Importar as funções que quiser usar no arquivo do componente
`src/App.tsx`
```tsx
import { increment, multiply, set } from "./features/counter/counter-slice"
```

## 10. Usar o dispatch e o selector dentro do componente
O hook `useAppSelector` retorna os estados armazenados dentro do retorno da função `useAppSelector()` || Renderizar valor e usar em operações
O hook `useDispatch` retorna uma função capaz de enviar dados do componente aos reducers no store || Disponibilizar funções que alteram dados no store
`src/App.tsx`
```tsx
const counter = useAppSelector((state) => state.counter)
const dispatch = useDispatch()
```

## 11. Definir os actions
`src/App.tsx`
```tsx
<button onClick={() => dispatch(increment())}>count is {counter.value}</button>
<button onClick={() => dispatch(multiply(2))}>multiply {counter.value}</button>
<button onClick={() => dispatch(set(10))}>set {counter.value}</button>
```
