import * as types from '../actions/actionTypes'

let initialState = {
    isLoading: false,
    data: {
        itemIds: [],
        items: {},
        columns: [],
    },
    error: false
}

function listReducer(state = initialState, action = null) {
    switch(action.type) {
        case types.RECEIVE_LIST_DATA_ERROR:
            return Object.assign({}, state, {isLoading: false, data: action.data, error: true});
        case types.RECEIVE_LIST_DATA:
            return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
        case types.REQUEST_LIST_DATA:
            return Object.assign({}, state, {isLoading: true, error: false });
        default:
            return state;
    }
}

export default listReducer
