import {createStore} from 'redux';
import {combineReducers} from 'redux';
import reducers from './reducers';


const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);

export {store};
