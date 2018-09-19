import * as actionTypes from '../actions/types';

export default (prevState = {}, action) => {
    switch (action.type) {
        case actionTypes.API_USERlIST_REQUEST:
            return Object.assign({}, prevState, {loading: true});
        case actionTypes.API_USERlIST_SUCCESS:
            return Object.assign({}, prevState, {loading: false}, {users: action.users});
        case actionTypes.API_USERlIST_ERROR:
            return Object.assign({}, prevState, {loading: false}, {error: action.error});
        default:
            return prevState;
    }
}