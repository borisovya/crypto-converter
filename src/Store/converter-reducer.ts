const converterInitialState = {

}

export const converterReducer = (
    state: AppStateType = converterInitialState,
    action: AppActionsType
): AppStateType => {
    switch (action.type) {
        case 'APP/SET-APP-LOADING':
            return { ...state, appLoading: action.appLoading }
        default:
            return state
    }
}

// actions
export const setCurrencyAC = () => {
    return {
        type: 'APP/SET-ALERT',
    } as const
}



// types
type AppStateType = typeof converterInitialState

export type AppActionsType = any
