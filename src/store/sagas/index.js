import {all, takeLatest} from 'redux-saga/effects';
import {authLogin} from '~/store/sagas/auth';
import {Types as AuthTypes} from '~/store/ducks/auth';

export default function* rootSaga() {
  yield all([takeLatest(AuthTypes.LOGIN, authLogin)]);
}
