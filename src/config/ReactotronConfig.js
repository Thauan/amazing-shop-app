import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.configure({
    name: 'Amazing Shop',
    host: '10.0.92.102',
  })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  tron.clear();

  console.tron = tron;
}
