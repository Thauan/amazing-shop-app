import {all, takeLatest} from 'redux-saga/effects';
import {authLogin} from '~/store/sagas/auth';
import {getFavorite} from '~/store/sagas/favor';
import {Types as AuthTypes} from '~/store/ducks/auth';
import {Types as FavoriteTypes} from '~/store/ducks/favor';

export default function* rootSaga() {
  yield all([takeLatest(AuthTypes.LOGIN, authLogin)]);
  yield all([takeLatest(FavoriteTypes.FAVORITE, getFavorite)]);
}
