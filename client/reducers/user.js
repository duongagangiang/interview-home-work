import  * as ActionTypes from '../actions/types';


const INITIAL_STATE = {
    data: null,
    loading: false,
    lastUpdate: Date.now()
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.START_LOGIN:
            return { ...state, loading: true};
        case ActionTypes.PROCESS_LOGIN:
            return { ...state, loading: false, data: action.payload};
        case ActionTypes.END_LOGIN:
            return { ...state, loading: false, data: action.payload};
        default:
            return state;
    }
};

export default userReducer;
