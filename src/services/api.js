import {create} from 'apisauce';
import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';

/**
 * Create an Axios Client with defaults
 */

const base = 'https://09c36472.ngrok.io';

const client = create({
  baseURL: `${base}/api/`,
});

client.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@token');

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
});

client.addResponseTransform(response => {
  if (!response.ok) {
    throw response;
  }
});

client.addMonitor(Reactotron.apisauce);

export default client;
