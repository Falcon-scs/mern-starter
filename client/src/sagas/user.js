import {call, put, takeLatest} from 'redux-saga/effects'

import * as actionTypes from '../actions/types';
import * as actionCreators from '../actions/user';
import * as config from '../config';

const API_ENDPOINT_USERS_LIST = config.SERVER_URL+'/users/list';
// const API_ENDPOINT_USERS_LOGIN = config.SERVER_URL+'/users/login';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* userSaga() {
   yield [
       takeLatest(actionTypes.API_USERlIST_REQUEST, getUserList),
       takeLatest(actionTypes.API_USERLOGIN_REQUEST, postUserLogin),
   ]

}

function* getUserList() {
    try {
        let users = yield call(() => fetch(API_ENDPOINT_USERS_LIST).then(response => response.json()))
        yield put(actionCreators.getUserListSuccess(users))
    } catch (error) {
        yield put(actionCreators.getUserListError(error))
    }
}
function* postUserLogin(data) {

}

