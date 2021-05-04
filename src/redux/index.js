
import { createStore } from 'redux';
import reducer from './reducer';
import { getInitialState } from './store';

const store = createStore(
    reducer,
    getInitialState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //For the Redux Dev Tools chrome extension.
);
export default store;