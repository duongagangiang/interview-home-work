// import { actionTypes } from '../actions/categories';


const INITIAL_STATE = {
    data: [],
    isFetching: false,
    lastUpdate: Date.now()
}

const exampleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REQUEST_CATEGORIES':
            return { ...state, isFetching: true};
        case 'RECEIVE_CATEGORIES':
            return { ...state, isFetching: false, data: action.payload};
        default:
            return state;
    }
};

export default exampleReducer;
