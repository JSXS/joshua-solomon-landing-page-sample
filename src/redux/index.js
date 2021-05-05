import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import watchers from './sagas';
import { getInitialState } from './store';

// Create the saga middleware.
const sagaMiddleware = createSagaMiddleware();

// Create the redux store with the saga and dev tools extension middleware.
const store = createStore(
    reducer,
    getInitialState(),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
export default store;

// Run the watchers after the store had been created.
for (const index in watchers) {
    sagaMiddleware.run(watchers[index]);
}