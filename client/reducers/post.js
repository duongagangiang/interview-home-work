import  * as ActionTypes from '../actions/types';


const INITIAL_STATE = {
    data: [],
    loading: false,
    lastUpdate: Date.now()
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'START_FETCH_POSTS':
            return { ...state, loading: true};
        case 'PROCESS_FETCH_POSTS':
            return { ...state, loading: false, data: action.payload};
        case 'END_FETCH_POSTS':
            return { ...state, loading: false, data: action.payload};
        default:
            return state;
    }
};

export default postReducer;
