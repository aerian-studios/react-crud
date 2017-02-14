import thunkMiddleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

//reducers
import listReducer from './../reducers/list'
import formReducer from '../../../react-form/src/reducers/form'

const rootReducer = combineReducers({
	list: listReducer,
	entityForm: formReducer,
	routing: routerReducer
})

import { createHashHistory } from 'history'

// Add the reducer to your store on the `routing` key
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer, composeEnhancers(
		applyMiddleware(thunkMiddleware)
	)
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(createHashHistory(), store)

exports.store = store;
exports.history = history;