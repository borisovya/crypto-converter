import {AppDispatch} from "./Store";
import {currencyAPI} from "../API/API";

const currencyInitialState = {
   data: []
}

export const currencyReducer = (
    state: CurrencyStateType = currencyInitialState,
    action: CurrencyActionsType
): CurrencyStateType => {
    switch (action.type) {
        case 'SET-CURRENCIES':
            return { ...state, data: action.data }
        default:
            return state
    }
}

// actions
export const setCurrencyAC = (data: CurrencyItemType[]) => {
    return {
        type: 'SET-CURRENCIES', data
    } as const
}

export const getCurrency = () => async (dispatch: AppDispatch) => {

    try {
        const response = await currencyAPI.getCurrencies()
        console.log(response.data.Data)
        dispatch(setCurrencyAC(response.data.Data))


    } catch (err) {
        alert(err)
    }
}

// types
type CurrencyStateType = {
    data: CurrencyItemType[]
}

export type CurrencyActionsType = ReturnType<typeof setCurrencyAC>

export type TCoin = {
    name: string;
    fullName: string;
    imageUrl: string;
    price: number;
    volume24Hour: number;
}


export type CurrencyItemType = {
    "CoinInfo": {
        "Name": string,
        "FullName": string,
        "ImageUrl": string,
    },
    "RAW": {
        "USD": {
            "PRICE": number,
            "VOLUME24HOUR": number
        }
    }
}
