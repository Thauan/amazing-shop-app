import {create} from 'apisauce';
import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';
import {BASE_URL_API} from 'react-native-dotenv';

/**
 * Create an Axios Client with defaults
 */

const BASE_URL = `${BASE_URL_API}`;

const client = create({
  baseURL: `${BASE_URL}/api/`,
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
