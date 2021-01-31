import {combineReducers} from 'redux';
import auth from '~/store/ducks/auth';
import favor from '~/store/ducks/favor';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  // example: () => [],
  auth,
  favor,
});

export default reducers;
