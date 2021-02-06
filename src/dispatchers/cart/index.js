import {useSelector, useDispatch} from 'react-redux';


const dispatch = useDispatch();

export function actionAddToCart(item) {
  dispatch({type: 'ADD_TO_CART', cart: item});
}

export function actionRemoveToCart(id) {
  dispatch({type: 'REMOVE_TO_CART', id: id});
}
