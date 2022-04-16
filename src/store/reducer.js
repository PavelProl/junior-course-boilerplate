export const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_MIN_VALUE':
            return {
                ...state,
                minValue: action.value
            }
        default:
            return state
    }
}
