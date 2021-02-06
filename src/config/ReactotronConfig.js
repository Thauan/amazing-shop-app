import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux} from 'reactotron-redux';


Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({
      enabled: true,
      // host: '192.168.0.101',  // server ip
      port: 9090,
    }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect(); // let's connect!

// if (__DEV__) {
//   const tron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
//     .configure({
//       enabled: true,
//       // host: '192.168.0.101',  // server ip
//       port: 9090,
//     }) // controls connection & communication settings
//     .useReactNative() // add all built-in react native plugins
//     .use(reactotronRedux())
//     .connect(); // let's connect!

//   tron.clear();

//   console.tron = tron;
// }