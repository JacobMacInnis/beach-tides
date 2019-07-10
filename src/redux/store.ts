import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Import Reducers
import searchReducer from './reducers/searchReducer';

const rootReducer = combineReducers({
    search: searchReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;