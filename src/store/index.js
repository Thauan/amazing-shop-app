import { createStore } from 'redux';
// import { reactotron } from '../reactotronConfig';
import reducers from './reducers';

const store = createStore(reducers);

export default store;