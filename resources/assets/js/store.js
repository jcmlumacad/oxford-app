import { createStore } from 'redux';
import reducers from './reducers';
import preloadedStates from './states';
import middlewares from './middlewares';

export default createStore(reducers, preloadedStates, middlewares);
