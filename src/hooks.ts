import { useSelector } from "react-redux"
import { TypedUseSelectorHook } from "react-redux/es/types"
import { RootState } from "./store"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
