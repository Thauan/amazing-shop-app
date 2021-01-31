import {put, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {Creators as FavoriteCreators} from '~/store/ducks/favor';
import api from '~/services/api';
// import NavigationService from '~/services/NavigationService';

export function* getFavorite(payload) {
  try {
    // const response = yield call(api.post, 'auth/login', {email, password});
    // const {data} = response;

    yield put(FavoriteCreators.favorite());


  } catch (error) {
    console.tron.log(error);
  }
}
