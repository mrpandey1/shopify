import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from'redux-persist';
import createSageMiddleware from 'redux-saga';
import rootSaga from './root.saga';

const sagaMiddleware=createSageMiddleware();

const middlewares=[sagaMiddleware];

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}

export const store= createStore(rootReducer,applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)

export const persistor=persistStore(store);

const storeVariable={store,persistStore}
export default storeVariable;