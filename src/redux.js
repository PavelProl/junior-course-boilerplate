export function createStore(reducer, initialState) {
    let state = initialState;
    let listeners = [];

    const getState = () => state;

    const subscribe = (listener) => {
        listeners.push(listener);
    };

    const dispatch = (action) => {
        state = reducer(state, action);

        listeners.forEach((listener) => {
            if (typeof listener === 'function') {
                listener();
            }
        });
    };

    return { getState, subscribe, dispatch };
}
