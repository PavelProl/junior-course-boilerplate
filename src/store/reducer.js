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
                discount: action.payload
            }
        case 'SELECT_CATEGORY':
            return {
                ...state,
                selectedCategories: action.payload
            }
        case 'RESET_FILTERS':
            window.history.pushState({}, '', '/');
            return {
                ...state,
                minValue: action.payload.payloadMin,
                maxValue: action.payload.payloadMax,
                discount: action.payload.payloadSale,
                selectedCategories: action.payload.payloadSelected
            }
        default:
            return state
    }
}
