import * as actionTypes from './types';

export function getUserListRequest() {
    return {type: actionTypes.API_USERlIST_REQUEST}
}
export function getUserListSuccess(users) {
    return {type: actionTypes.API_USERlIST_SUCCESS, users}
}
export function getUserListError(error) {
    return {type: actionTypes.API_USERlIST_ERROR, error}
}
export function getUserLoginRequest(data) {
    return {type: actionTypes.API_USERLOGIN_REQUEST}
}
export function getUserLoginSuccess(users) {
    return {type: actionTypes.API_USERLOGIN_SUCCESS, users}
}
export function getUserLoginError(error) {
    return {type: actionTypes.API_USERLOGIN_ERROR, error}
}

