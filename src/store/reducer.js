export const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_MIN_VALUE':
            return {
                ...state,
                minValue: action.payload
            };
        case 'CHANGE_MAX_VALUE':
            return {
                ...state,
                maxValue: action.payload
            };
        case 'CHANGE_DISCOUNT_VALUE':
            return {
                ...state,
                sale: action.payload
            }
        case 'RESET_FILTERS':
            return {
                ...state,
                minValue: action.payload.payloadMin,
                maxValue: action.payload.payloadMax,
                sale: action.payload.payloadSale
            }
        default:
            return state
    }
}
