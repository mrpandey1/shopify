import { all,call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from './user/user.saga';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga(){
    yield all([
        call(fetchCollectionsStart),
        call(userSagas),
        call(cartSagas)
    ])
};