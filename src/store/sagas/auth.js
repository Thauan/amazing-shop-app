import {put, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {Creators as AuthCreators} from '~/store/ducks/auth';
import api from '~/services/api';
import NavigationService from '~/services/NavigationService';

export function* authLogin({payload: {email, password}}) {
  try {
    const response = yield call(api.post, 'auth/login', {email, password});
    const {data} = response;

    yield put(AuthCreators.authSuccess(data));

    yield call(AsyncStorage.multiSet, [
      ['@token', data.token],
      ['@user', JSON.stringify(data.user)],
    ]);

    yield call([NavigationService, 'navigate'], 'Main');
    // yield call(this.props.navigation.navigate('Main'));
  } catch (error) {
    console.tron.log(error);
  }
}
