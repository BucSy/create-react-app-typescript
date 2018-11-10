import { takeEvery } from 'redux-saga/effects';
import { TEXT_TO_STORE } from '../modules/app';
import { appTextInput } from './appSaga';

export function* rootSaga() {
    yield takeEvery([TEXT_TO_STORE], appTextInput);
}