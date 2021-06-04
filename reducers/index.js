import { combineReducers } from 'redux';

import LoaderReducer from './LoaderReducer';
// import UserReducer from './UserReducer';

export default combineReducers({
    loaderReducer: LoaderReducer,
    // userReducer: UserReducer,
});