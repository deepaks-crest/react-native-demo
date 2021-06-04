import * as Actions from '../actions/ActionTypes';

const initialState = {
    loaderSpinning: 'false',
};

const LoaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.START_LOADER:
            return {
                ...state,
                loaderSpinning: 'true',
            };
        case Actions.STOP_LOADER:
            return {
                ...state,
                loaderSpinning: 'false',
            };
        default:
            return state;
    }
}
export default LoaderReducer;

// Function to handle the starting of loader
export function startLoader() {
    return {
        type: Actions.START_LOADER,
        payload: {}
    };
}

// Function to handle the stopping of loader
export function stopLoader() {
    return {
        type: Actions.STOP_LOADER,
        payload: {}
    };
}