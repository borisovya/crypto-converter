import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import {CurrencyActionsType, currencyReducer} from "./currency-reducer";
import {converterReducer} from "./converter-reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'


const rootReducer = combineReducers({
    currency: currencyReducer,
    converter: converterReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AllActionsType>
export type AllActionsType = CurrencyActionsType

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// @ts-ignore
window.store = store
// @ts-ignore